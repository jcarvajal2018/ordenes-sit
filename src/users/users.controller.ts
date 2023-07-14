import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { EditUsersDto } from "./dto/edit-users.dto"
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 // @Post()
 // create(@Body() createUserDto: CreateUserDto) {
 //   return this.usersService.create(createUserDto);
 // }

 @Post()
   post(@Body() dto: EditUsersDto){
    return this.usersService.create(dto)
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
  update(@Param('id') id:number,@Body() dto: EditUsersDto){
    return this.usersService.update(id,dto)
  }

  @Delete(':id')
  delete(@Param('id') id:number){
    return this.usersService.delete(id)
  }
}
