import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gjob, GjobSchema } from 'src/schemas/gjob.schema';
import { GjobController } from './gjob.controller';
import { GjobService } from './gjob.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Gjob.name, schema: GjobSchema }])],
    controllers: [GjobController],
    providers: [GjobService],
})
  
export class GjobModule {}
