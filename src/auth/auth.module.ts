import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/Schema/user.schema';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        JwtModule.register({
            secret: process.env.JJWT_SECRET_KEY,
            signOptions: { expiresIn: '1h' },
        })
    ],
    controllers: [AuthController],
    providers: [UserService, AuthService],
    exports: [AuthService],
})
export class AuthModule {}
