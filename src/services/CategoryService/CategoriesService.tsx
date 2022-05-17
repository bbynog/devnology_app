import { categoriesData } from 'mocks';

class CategoryService {
  static instance = new CategoryService();

  async fetchCategories() {
    await new Promise(resolve => setTimeout(resolve, 2500));
    return categoriesData;
  }
}

const categoryService = CategoryService.instance;

export default categoryService;
