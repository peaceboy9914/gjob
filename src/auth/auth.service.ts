import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/Schema/user.schema';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService, 
        private jwtService: JwtService) 
        {}


    async create(email: string, password: string): Promise<{ access_token: string }> {
        const user = await this.userService.findByEmail(email);
        if(user && await bcrypt.compare(password, user.password)){
            const payload = { email: user.email};
            return {
                access_token: this.jwtService.sign(payload),
            }
        }
        throw new UnauthorizedException('INvalid credentials')
    }
}
