import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { ArticulosModule } from './articulos/articulos.module';

@Module({
  imports: [UsersModule, ClientesModule, ArticulosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
