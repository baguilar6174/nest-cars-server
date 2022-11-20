import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCarDto } from 'src/car/dto/create-car.dto';
import { Car } from 'src/car/entities/car.entity';
import { CARS_DATA } from './data';

@Injectable()
export class SeedService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}
  async create(): Promise<string> {
    await this.carModel.deleteMany({}); // delete * from cars
    const carsToInsert: CreateCarDto[] = [];
    CARS_DATA.map(async ({ id, model }): Promise<void> => {
      const createCarDto: CreateCarDto = {
        name: model,
        nro: id,
      };
      carsToInsert.push(createCarDto);
    });
    await this.carModel.insertMany(carsToInsert);
    return 'Seed created!';
  }
}
