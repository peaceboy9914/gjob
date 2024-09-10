import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    @Post('login')
    async create(@Body() body: {email: string; password: string}) {
        return this.authService.create(body.email, body.password)
    }
}
