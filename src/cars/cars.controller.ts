import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateDto, UpdateDto } from './dtos';
import { Car } from './interfaces/car.interface';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll(): Car[] {
    return this.carsService.findAll();
  }
  @Get(':id')
  getById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): Car {
    return this.carsService.findById(id);
  }
  @Post()
  // @UsePipes(ValidationPipe)
  create(@Body() createCarDto: CreateDto): Car {
    return this.carsService.create(createCarDto);
  }
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateDto,
  ): Car {
    return this.carsService.update(id, updateCarDto);
  }
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carsService.delete(id);
  }
}
