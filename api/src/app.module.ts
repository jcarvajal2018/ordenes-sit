import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { ArticulosModule } from './articulos/articulos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ClientesModule, ArticulosModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
