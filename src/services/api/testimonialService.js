import testimonialsData from "@/services/mockData/testimonials.json";

class TestimonialService {
  constructor() {
    this.testimonials = [...testimonialsData];
  }

  async getAll() {
    await this.delay(300);
    return [...this.testimonials];
  }

  async getById(id) {
    await this.delay(200);
    return this.testimonials.find(testimonial => testimonial.Id === parseInt(id));
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new TestimonialService();