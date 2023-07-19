import { Prisma } from "@prisma/client";

export class Cliente implements Prisma.ClienteCreateInput {
  id: number;
  cliente: number;
  nombre: string;
  razonsocial:string;
  credito: number;
  limite: number;
  plazo: number;
  saldo: number;
  bloqueado: number
}