import { productsData } from 'mocks';

class ProductService {
  static instance = new ProductService();

  async fetchProducts() {
    await new Promise(resolve => setTimeout(resolve, 2500));
    return productsData;
  }
}

const productService = ProductService.instance;

export default productService;
