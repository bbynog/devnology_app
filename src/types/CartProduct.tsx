import { ProductImage } from './ProductImage';

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  imagesUri: ProductImage[];
  quantity: number;
  subTotal: number;
}
