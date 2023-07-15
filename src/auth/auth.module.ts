import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from "src/prisma.service";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/users/jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn:'24h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaService]
})
export class AuthModule {}
