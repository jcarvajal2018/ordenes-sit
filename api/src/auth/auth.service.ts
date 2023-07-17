import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PrismaService } from 'src/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService) { }

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject 
    const plainToHash = await hash(password, 10)
    userObject = { ...userObject, password: plainToHash }
    //return this.prisma.user.create({data:userObject})
    return this.prisma.user.create({
      data: {
        name: userObject.name,
        email: userObject.email,
        password: userObject.password}})
  }


  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin
    const findUser = await this.prisma.user.findUnique({ where: { email: String(email) } })
    if (!findUser) throw new HttpException('USUARIO NO EXISTE', 404)

    const checkPassword = await compare(password, findUser.password)
    if (!checkPassword) throw new HttpException('CLAVE ERRONEA', HttpStatus.FORBIDDEN)
    
    const payload = {id:findUser.id, name:findUser.name}
    const token = await this.jwtService.sign(payload)
    
    const data = {
      user: findUser,
      token
    }
    return data;
  }

}





