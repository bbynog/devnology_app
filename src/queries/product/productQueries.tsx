import { productService } from 'services';

import { productKeysFactory } from './productKeysFactory';

import { useQuery } from 'react-query';

export const useFetchProducts = () => {
  return useQuery(productKeysFactory.all, () => productService.fetchProducts());
};
