import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { Articulo } from "./articulos.model"


@Controller('articulos')
export class ArticulosController {
  constructor(private readonly articulosService: ArticulosService) { }

  @Post()
  post(@Body() postData: Articulo) {
    return this.articulosService.create(postData)
  }


  @Get()
  findAll() {
    return this.articulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articulosService.findOne(+id);
  }


  @Put(':id')
  update(@Param('id') id: number, @Body() postData: Articulo) {
    return this.articulosService.update(id, postData)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.articulosService.delete(id)
  }
}


