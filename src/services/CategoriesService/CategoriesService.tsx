import { categoriesData } from 'mocks';

class CategoriesService {
  static instance = new CategoriesService();

  async fetchCategories() {
    setTimeout(() => {
      return categoriesData;
    }, 100);
  }
}

const categoriesService = CategoriesService.instance;

export default categoriesService;
