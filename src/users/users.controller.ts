import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './database/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }
}
