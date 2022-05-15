import { categoriesData } from 'mocks';

class CategoryService {
  static instance = new CategoryService();

  async fetchCategories() {
    return categoriesData;
  }
}

const categoryService = CategoryService.instance;

export default categoryService;
