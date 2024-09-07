import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const uploadDir = join(process.cwd(), 'uploads');
  if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir);
  }
  app.setGlobalPrefix('/api');
  app.enableCors(); // Enable CORS for all origins
  await app.listen(3000);
}
bootstrap();
