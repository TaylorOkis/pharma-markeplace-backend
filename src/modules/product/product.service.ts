import BadRequestError from "@/core/errors/error/badRequest.error.js";
import { ProductDTO } from "./product.dtos.js";
import { ProductRepository } from "./product.repository.js";

export class ProductService {
  private productrepository = new ProductRepository();

  async createProduct(product: ProductDTO) {
    const existingProduct = await this.productrepository.findByVendorAndName({
      name: product.name,
      vendor_id: product.vendor_id,
    });
    if (existingProduct.length > 0) {
      throw new BadRequestError("Vendor already has this particular product");
    }

    const productRef = await this.productrepository.create(product);

    return productRef;
  }
  async getAllProducts() {}
  async getSingleProduct() {}
  async updateProduct() {}
  async deleteProduct() {}
}
