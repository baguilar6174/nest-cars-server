import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  readonly nro: string;

  @IsString()
  @MinLength(1)
  name: string;
}
