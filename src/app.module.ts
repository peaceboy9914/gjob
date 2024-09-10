import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB_URL), ItemsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
