import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from "./users.model";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 // @Post()
 // create(@Body() createUserDto: CreateUserDto) {
 //   return this.usersService.create(createUserDto);
 // }

 @Post()
   post(@Body() postData: User){
    return this.usersService.create(postData)
  }  


  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

 
  @Put(':id')
  update(@Param('id') id:number,@Body() postData: User){
    return this.usersService.update(id,postData)
  }

  @Delete(':id')
  delete(@Param('id') id:number){
    return this.usersService.delete(id)
  }
}
