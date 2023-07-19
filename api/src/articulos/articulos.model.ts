import { Prisma } from "@prisma/client";

export class Articulo implements Prisma.ArticuloCreateInput {
  id: number;
  articulo:string;
  descripcion: string;
  medida: string;
  barra: string;
  equivalente: string;
  grupoUnidad: number;
  unidadGrupo: number;
  tipoDescarga: number;
  combo: number;
  herencia: number;
  existencia: number;
  descuento: number;
  precio1: number;
  precio2: number;
  precio3: number;
  codiva: number;
  piva: number
}
