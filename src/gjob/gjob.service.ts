import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Gjob } from 'src/schemas/gjob.schema';

@Injectable()
export class GjobService {
    constructor(@InjectModel(Gjob.name) private catModel: Model<Gjob>) {}

    async create(createUserDto: CreateUserDto): Promise<Gjob> {
      const createdCat = new this.catModel(createUserDto);
      return createdCat.save();
    }
  
    async findAll(): Promise<Gjob[]> {
      return this.catModel.find().exec();
    }
}

