import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './entities/item.entity';
import { Gjob, GjobSchema } from 'src/schemas/gjob.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Gjob.name, schema: GjobSchema}])
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
