import { Injectable } from '@nestjs/common';
import { BrandService } from 'src/brand/brand.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANS_DATA, CARS_DATA } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandService,
  ) {}
  create(): string {
    this.brandService.populateBrands(BRANS_DATA);
    this.carService.populateCars(CARS_DATA);
    return 'Seed created!';
  }
}
