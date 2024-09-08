import { Body, Controller, Get, Param, Post, Put, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { GjobService } from './gjob.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('gjob')
export class GjobController {

    constructor(private GjobService: GjobService){}

    @Get('users')
    findAll() {
        return this.GjobService.findAll()
    }

    @Get('users/:id')
    findOne(@Param() params: any): string {
        console.log(params.id)
        return `This action returns users of id ${params.id}`
    }

    @Post('users')
    create(@Body() createUserDto: CreateUserDto) {
        return this.GjobService.create(createUserDto)
    }

    @Post('users/upload')
    @UseInterceptors(FilesInterceptor('files', null, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
      const url = `http://localhost:3000/uploads/${file.filename}`;
      return this.GjobService.uploadImage(file.originalname, url);
    }



    // @Delete('users/:id')
    // remove(@Param('id') id: string) {
    //     return this.GjobService.remove(id);
    // }
}




