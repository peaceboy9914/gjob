import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileUploadSchema } from 'src/schemas/file-upload.schema';
import { GjobController } from 'src/gjob/gjob.controller';
import { ImagesController } from './images.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Image', schema: FileUploadSchema }]),
  ],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
