// src/items/items.controller.ts
import { Controller, Post, Get, Param, Body, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { Item } from './entities/item.entity';
import { Gjob } from 'src/schemas/gjob.schema';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage }))
  async create( @UploadedFile() file: Express.Multer.File) {
    const imageUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    return this.itemsService.create({ imageUrl });
  }

  @Get()
  async findAll(): Promise<Gjob[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Gjob> {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() itemData: Partial<Item>): Promise<Gjob> {
    return this.itemsService.update(id, itemData);
  }


}