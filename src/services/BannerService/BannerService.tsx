import { bannersData } from 'mocks/banner';

class BannerService {
  static instance = new BannerService();

  async fetchBanners() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return bannersData;
  }
}

const bannerService = BannerService.instance;

export default bannerService;
