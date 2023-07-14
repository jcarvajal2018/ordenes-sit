import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from "src/prisma.service";
import { JwtModule} from '@nestjs/jwt'
import { jwtConstants } from './jwt.constants';


@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '20h' },
    }),
  ],

  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule {}
