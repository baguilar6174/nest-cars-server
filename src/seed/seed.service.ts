import { Injectable } from '@nestjs/common';
import { BrandService } from 'src/brand/brand.service';
import { CarService } from 'src/car/car.service';
import { BRANS_DATA } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarService,
    private readonly brandService: BrandService,
  ) {}
  create(): string {
    this.brandService.populateBrands(BRANS_DATA);
    return 'Seed created!';
  }
}
