import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/Schema/user.schema';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
    ],
    controllers: [AuthController],
    providers: [UserService]
})
export class AuthModule {}
