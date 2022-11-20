import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { CarService } from './car.service';
import { CarController } from './car.controller';
import { Car, CarSchema } from './entities/car.entity';

@Module({
  controllers: [CarController],
  providers: [CarService],
  exports: [MongooseModule],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
    ]),
  ],
})
export class CarModule {}
