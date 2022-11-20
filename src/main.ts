import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // clean data and allows DTO data
      forbidNonWhitelisted: true, // validate only DTO data with error messages
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.setGlobalPrefix(process.env.API_PREFIX);
  await app.listen(process.env.PORT);
}
bootstrap();
