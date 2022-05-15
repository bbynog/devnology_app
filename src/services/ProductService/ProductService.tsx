import { productsData } from 'mocks';

class ProductService {
  static instance = new ProductService();

  async fetchProducts() {
    return productsData;
  }
}

const productService = ProductService.instance;

export default productService;
