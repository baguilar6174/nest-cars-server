import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCarDto } from 'src/car/dto/create-car.dto';
import { Car } from 'src/car/entities/car.entity';
import { CARS_DATA } from './data';

@Injectable()
export class SeedService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}
  create(): string {
    CARS_DATA.map(async ({ id, model }): Promise<void> => {
      const createCarDto: CreateCarDto = {
        name: model,
        nro: id,
      };
      await this.carModel.create(createCarDto);
    });
    return 'Seed created!';
  }
}
