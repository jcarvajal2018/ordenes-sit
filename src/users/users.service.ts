import { PrismaService } from "src/prisma.service";
import { Injectable } from '@nestjs/common';
import { User } from "./users.model";


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  //  create(createUserDto: CreateUserDto) {
  //    return 'This action adds a new user';
  //  }

  create(data: User) {
    return this.prisma.user.create({
      data,
    })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, data: User) {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: { email: data.email, name: data.name, password: data.password }
    });
  }

  delete(id: number) {
    return this.prisma.user.delete({
      where: { id: Number(id) }
    })
  }


}