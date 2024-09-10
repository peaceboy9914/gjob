import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User } from './Schema/user.schema';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}
    @Post('admin/add')
    async create(@Body() body: {email: string; password: string}) {
        return this.userService.create(body.email, body.password)
    }

    @Get('admin')
    async findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

}
