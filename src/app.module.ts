import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GjobModule } from './gjob/gjob.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB_URL), GjobModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
