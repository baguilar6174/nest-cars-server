import { IsString } from 'class-validator';
export class CreateDto {
  @IsString()
  readonly brand: string;
  @IsString()
  readonly model: string;
}
