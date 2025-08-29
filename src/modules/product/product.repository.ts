import { admin, db } from "@/config/firebase.js";
import { ProductDTO } from "./product.dtos.js";

export class ProductRepository {
  async create(product: ProductDTO) {
    return await db
      .collection("products")
      .doc()
      .set({
        ...product,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
  }

  async update() {}
  async delete() {}

  async findByVendorAndName({
    name,
    vendor_id,
  }: {
    name: string;
    vendor_id: string;
  }) {
    const snapshots = await db
      .collection("products")
      .where("name", "==", name)
      .where("vendor_id", "==", vendor_id)
      .get();

    const result = snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return result;
  }

  async getAll() {
    const snapshots = await db.collection("products").get();

    const data = snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return data;
  }

  async getAllForVendor(vendorId: string) {
    const snapshots = await db
      .collection("products")
      .where("vendor_id", "==", vendorId)
      .get();

    const data = snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return data;
  }
}
