// src/items/items.controller.ts
import { Controller, Post, Get, Param, Body, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { Item } from './entities/item.entity';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

@Controller('users')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('add')
  @UseInterceptors(FileInterceptor('file', { storage }))
  async create(@Body() itemData: Partial<Item>, @UploadedFile() file: Express.Multer.File) {
    const imageUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    return this.itemsService.create({ ...itemData, imageUrl });
  }

  @Get('all')
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() itemData: Partial<Item>): Promise<Item> {
    return this.itemsService.update(id, itemData);
  }


}