import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { BrandModule } from './brand/brand.module';
import { SeedModule } from './seed/seed.module';
import { CarModule } from './car/car.module';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    BrandModule,
    SeedModule,
    CarModule,
    CommonModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
