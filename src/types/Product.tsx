import { ProductImage } from './ProductImage';

export interface Product {
  id: string;
  name: string;
  fullName: string;
  description: string;
  price: number;
  imagesUri: ProductImage[];
}
