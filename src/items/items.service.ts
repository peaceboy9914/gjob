// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async create(itemData: Partial<Item>): Promise<Item> {
    const createdItem = new this.itemModel(itemData);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  async update(id: string, itemData: Partial<Item>): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, itemData, { new: true }).exec();
  }


}