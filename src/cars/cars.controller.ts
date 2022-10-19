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
import { Car } from './interfaces/car.interface';

@Controller('cars')
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
  create(@Body() body: any) {
    return body;
  }
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {
    return { body, id };
  }
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return { id };
  }
}
