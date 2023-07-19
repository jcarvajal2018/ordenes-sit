import { Prisma } from "@prisma/client";

export class User implements Prisma.UserCreateInput {
  id: number;
  email: string;
  username: string;
  vendedor: number;
  password:string;
}

