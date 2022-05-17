import { bannerData } from 'mocks/banner';

class BannerService {
  static instance = new BannerService();

  async fetchBanners() {
    return bannerData;
  }
}

const bannerService = BannerService.instance;

export default bannerService;
