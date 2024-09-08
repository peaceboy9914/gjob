// file-upload.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileUploadDocument = FileUpload & Document;

@Schema()
export class FileUpload {
  @Prop()
  filename: string;

  @Prop()
  description: string;
}

export const FileUploadSchema = SchemaFactory.createForClass(FileUpload);