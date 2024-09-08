import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileUploadDto } from 'src/dto/file-upload.dto';
import { FileUpload } from 'src/schemas/file-upload.schema';

@Injectable()
export class ImagesService {
    constructor(@InjectModel('FileUpload') private readonly fileUploadModel: Model<FileUpload>) { }

    async uploadFile(file: Express.Multer.File, fileUploadDto: FileUploadDto) {
      const fileUpload = new this.fileUploadModel({
        filename: file.filename,
        description: fileUploadDto.description,
      });
      return fileUpload.save();
    }

    async getFile(id: string) {
        return this.fileUploadModel.findById(id);
    }

    async getAllFiles() {
        return this.fileUploadModel.find().exec();
    }
}
