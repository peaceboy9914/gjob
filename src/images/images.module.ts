import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileUpload, FileUploadSchema } from 'src/schemas/file-upload.schema';
import { ImagesController } from './images.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FileUpload.name, schema: FileUploadSchema }]),
  ],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
