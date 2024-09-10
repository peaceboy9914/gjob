import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(email: string, password:string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10)
        const addUser = new this.userModel({email, password: hashedPassword});
        return addUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }
}
