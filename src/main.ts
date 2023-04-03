import { NestFactory } from '@nestjs/core';
import { DeviceModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(DeviceModule);
  await app.listen(3000);
}
bootstrap();
