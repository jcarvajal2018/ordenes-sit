import { PrismaService } from "src/prisma.service";
import { Injectable } from '@nestjs/common';
import { Articulo } from "./articulos.model";


@Injectable()
export class ArticulosService {
  constructor(private prisma: PrismaService) { }

  //  create(createUserDto: CreateUserDto) {
  //    return 'This action adds a new user';
  //  }

  create(data: Articulo) {
    return this.prisma.articulo.create({
      data,
    }) 
  }

  findAll() {
    return this.prisma.articulo.findMany();
  }

  findOne(id: number) {
    return this.prisma.articulo.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, data: Articulo) {
    return this.prisma.articulo.update({
      where: { id: Number(id) },
      data: {
        articulo: data.articulo, descripcion: data.descripcion, medida: data.medida,
        barra: data.barra, equivalente: data.equivalente, grupoUnidad: data.grupoUnidad, 
        unidadGrupo: data.unidadGrupo, tipoDescarga: data.tipoDescarga, combo: data.combo, 
        herencia: data.herencia, existencia: data.existencia, descuento: data.descuento, 
        precio1: data.precio1, precio2: data.precio2, precio3:data.precio3, codiva: data.codiva, 
        piva: data.piva
      }
    });
  }

  delete(id: number) {
    return this.prisma.articulo.delete({
      where: { id: Number(id) }
    })
  }


}