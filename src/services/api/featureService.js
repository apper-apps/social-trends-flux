import featuresData from "@/services/mockData/features.json";

class FeatureService {
  constructor() {
    this.features = [...featuresData];
  }

  async getAll() {
    await this.delay(250);
    return [...this.features];
  }

  async getById(id) {
    await this.delay(200);
    return this.features.find(feature => feature.Id === parseInt(id));
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new FeatureService();