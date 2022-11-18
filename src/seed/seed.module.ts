import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { BrandModule } from 'src/brand/brand.module';
import { CarModule } from 'src/car/car.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarModule, BrandModule],
})
export class SeedModule {}
