import comparisonData from "@/services/mockData/comparisonItems.json";

class ComparisonService {
  constructor() {
    this.comparisons = [...comparisonData];
  }

  async getAll() {
    await this.delay(300);
    return [...this.comparisons];
  }

  async getById(id) {
    await this.delay(200);
    return this.comparisons.find(comparison => comparison.Id === parseInt(id));
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new ComparisonService();