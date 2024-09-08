// images.controller.ts
import { Body, Controller, Get, HttpStatus, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileUploadDto } from 'src/dto/file-upload.dto';
import { ImagesService } from './images.service'; // <--- Import the ImagesService
import * as uuid from 'uuid';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {} // <--- Inject the ImagesService

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename = uuid.v4();
        const extension = file.originalname.split('.').pop();
        cb(null, `${filename}.${extension}`);
      }
    })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() fileUploadDto: FileUploadDto) {
    // Save the file metadata to MongoDB
    return this.imagesService.uploadFile(file, fileUploadDto);
  }

  @Get('iamge:id')
  async getFile(@Param('id') id:string, @Res() res) {
    const file = await this.imagesService.getFile(id);
    if(!file) {
        return res.status(404).send({ message: 'File not found' });
    }
    return res.status(HttpStatus.OK).json(file);
  }

  @Get()
  async getAllFiles(@Res() res) {
    const files = await this.imagesService.getAllFiles();
    return res.status(HttpStatus.OK).json(files);
  }
}