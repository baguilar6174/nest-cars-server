import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
} from '@nestjs/common';
import { PaginationDto } from 'src/common/dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @HttpCode(201)
  // @UsePipes(ValidationPipe)
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.carService.findAll(paginationDto);
  }

  @Get(':search')
  findOne(@Param('search') search: string): Promise<Car> {
    return this.carService.findOne(search);
  }

  @Patch(':search')
  update(@Param('search') search: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(search, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string): Promise<void> {
    return this.carService.remove(id);
  }
}
