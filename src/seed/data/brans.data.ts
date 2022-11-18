/* eslint-disable prettier/prettier */
import { Brand } from 'src/brand/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANS_DATA: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'chevrolet',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'audi',
    createdAt: new Date().getTime(),
  },
];
