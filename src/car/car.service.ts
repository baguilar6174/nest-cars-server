import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

  async create(createCarDto: CreateCarDto) {
    createCarDto.name = createCarDto.name.toLowerCase();
    try {
      const car = await this.carModel.create(createCarDto);
      return car;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return this.carModel.find();
  }

  async findOne(search: string): Promise<Car> {
    let car: Car;
    if (!isNaN(+search)) {
      car = await this.carModel.findOne({ nro: search });
    }
    if (!car && isValidObjectId(search)) {
      car = await this.carModel.findById(search);
    }
    if (!car) {
      car = await this.carModel.findOne({ name: search.toLowerCase() });
    }
    if (!car) {
      throw new NotFoundException(`Car with search term ${search} not found`);
    }
    return car;
  }

  async update(search: string, updateCarDto: UpdateCarDto) {
    try {
      const car = await this.findOne(search);
      if (updateCarDto.name)
        updateCarDto.name = updateCarDto.name.toLowerCase();
      await car.updateOne(updateCarDto);
      return { ...car.toJSON(), ...updateCarDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string): Promise<void> {
    // * First way
    // const car = await this.findOne(id);
    // await car.deleteOne();
    // * Second way
    // const car = await this.carModel.findByIdAndDelete(id);
    // * Best way
    const { deletedCount } = await this.carModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new BadRequestException(`Car with id '${id}' not found`);
    }
    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Car exists in DB ${JSON.stringify(error.keyValue)}`,
      );
    }
    throw new InternalServerErrorException(
      `Can't create car check server logs`,
    );
  }
}
