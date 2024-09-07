import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GjobModule } from './gjob/gjob.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mahdi:9914mamunusaka9914@gjobs.fka1l.mongodb.net/'), GjobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
