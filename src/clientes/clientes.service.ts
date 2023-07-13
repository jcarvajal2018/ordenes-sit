import { PrismaService } from "src/prisma.service";
import { Injectable } from '@nestjs/common';
import { Cliente } from "./clientes.model";

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) { }

  //  create(createUserDto: CreateUserDto) {
  //    return 'This action adds a new user';
  //  }

  create(data: Cliente) {
    return this.prisma.cliente.create({
      data,
    })
  }

  findAll() {
    return this.prisma.cliente.findMany();
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, data: Cliente) {
    return this.prisma.cliente.update({
      where: { id: Number(id) },
      data: {
        codigo: data.codigo, nombre: data.nombre,
        razonsocial: data.razonsocial, credito: data.credito,
        limite: data.limite, plazo: data.plazo, saldo: data.saldo,
        bloqueado: data.bloqueado
      }
    });
  }

  delete(id: number) {
    return this.prisma.cliente.delete({
      where: { id: Number(id) }
    })
  }


}