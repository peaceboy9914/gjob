import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User } from './Schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard'; 

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Post('admin/add')
    async create(@Body() body: {email: string; password: string}) {
        return this.userService.create(body.email, body.password)
    }

    @Get('admin')
    async findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

}
