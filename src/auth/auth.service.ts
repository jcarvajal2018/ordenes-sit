import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PrismaService } from 'src/prisma.service';
import { hash,compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService) { }

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject //textplano
    const plainToHash = await hash(password, 10)
    userObject = { ...userObject, password: plainToHash }
    return this.prisma.user.create({ data: userObject })
  }

 async login(userObjectLogin:LoginAuthDto){
   const {email, password} = userObjectLogin
   const findUser= await this.prisma.user.findUnique({where:{email:String(email)}})
   if(!findUser) throw new HttpException('USUARIO NO EXISTE',404)

   const checkPassword = await compare(password,findUser.password)
   if(!checkPassword) throw new HttpException('CLAVE ERRONEA',HttpStatus.FORBIDDEN)
   
   const data = findUser;
   return data;
 }

}





