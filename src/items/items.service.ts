// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private userModel: Model<ItemDocument>) {}

  async create(itemData: Partial<Item>): Promise<Item> {
    const createdItem = new this.userModel(itemData);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, itemData: Partial<Item>): Promise<Item> {
    return this.userModel.findByIdAndUpdate(id, itemData, { new: true }).exec();
  }


}