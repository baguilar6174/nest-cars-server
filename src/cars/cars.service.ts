import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateDto, UpdateDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'Camaro',
    },
  ];

  findAll(): Car[] {
    return this.cars;
  }

  findById(id: string): Car {
    const car = this.cars.find((car): boolean => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateDto): Car {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateDto): Car {
    let carDB = this.findById(id);
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Car ID is not valid`);
    }
    this.cars = this.cars.map((car: Car): Car => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string): Car {
    const carDB = this.findById(id);
    this.cars.filter((car: Car): boolean => car.id !== id);
    return carDB;
  }
}
