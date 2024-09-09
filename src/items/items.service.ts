// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './entities/item.entity';
import { Gjob } from 'src/schemas/gjob.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Gjob.name) private catModel: Model<Gjob>) {}

  async create(itemData: Partial<Gjob>): Promise<Gjob> {
    const createdItem = new this.catModel(itemData);
    return createdItem.save();
  }

  async findAll(): Promise<Gjob[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Gjob> {
    return this.catModel.findById(id).exec();
  }

  async update(id: string, itemData: Partial<Gjob>): Promise<Gjob> {
    return this.catModel.findByIdAndUpdate(id, itemData, { new: true }).exec();
  }


}