import { Controller, Get, Post, Put, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from "./clientes.model";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) { }

  @Post()
  post(@Body() postData: Cliente) {
    return this.clientesService.create(postData)
  }


  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }


  @Put(':id')
  update(@Param('id') id: number, @Body() postData: Cliente) {
    return this.clientesService.update(id, postData)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientesService.delete(id)
  }
}

