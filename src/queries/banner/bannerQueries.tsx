import { bannerService } from 'services';

import { bannerKeysFactory } from './bannerKeysFactory';

import { useQuery } from 'react-query';

export const useFetchBanners = () => {
  return useQuery(bannerKeysFactory.all, () => bannerService.fetchBanners());
};
