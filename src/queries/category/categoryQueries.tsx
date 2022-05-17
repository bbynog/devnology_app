import { categoryService } from 'services';

import { categoryKeysFactory } from './categoryKeysFactory';

import { useQuery } from 'react-query';

export const useFetchCategories = () => {
  return useQuery(categoryKeysFactory.all, () =>
    categoryService.fetchCategories()
  );
};
