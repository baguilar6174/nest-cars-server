import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandService {
  private brands: Brand[] = [];
  create(createBrandDto: CreateBrandDto): Brand {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: string): Brand {
    const brand = this.brands.find((brand): boolean => brand.id === id);
    if (!brand) throw new NotFoundException(`brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((brand: Brand): Brand => {
      if (brand.id === id) {
        brandDB = { ...brandDB, ...updateBrandDto, id };
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string): Brand {
    const brandDB = this.findOne(id);
    this.brands.filter((brand: Brand): boolean => brand.id !== id);
    return brandDB;
  }

  populateBrands(brands: Brand[]): void {
    this.brands = brands;
  }
}
