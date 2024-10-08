import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/Schema/user.schema';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        forwardRef(() => UserModule),
        JwtModule.register({
            secret: process.env.JJWT_SECRET_KEY,
            signOptions: { expiresIn: '1h' },
        })
    ],
    controllers: [AuthController],
    providers: [UserService, AuthService, , JwtStrategy, JwtAuthGuard],
    exports: [AuthService],
})
export class AuthModule {}
