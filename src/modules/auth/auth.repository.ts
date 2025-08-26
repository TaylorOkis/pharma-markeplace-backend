import { db, admin, auth } from "@/config/firebase.js";
import { UserRecord } from "firebase-admin/auth";
import { CustomerDTO, VendorDTO } from "./auth.dtos.js";

export class AuthRepository {
  async createUserCredentials(customer: CustomerDTO | VendorDTO) {
    return await auth.createUser({
      email: customer.email,
      password: customer.password,
      displayName: customer.name,
    });
  }

  async setCustomer(userRecord: UserRecord, customer: CustomerDTO) {
    await db.collection("users").doc(userRecord.uid).set({
      name: customer.name,
      email: customer.email,
      role: "customer",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return db.collection("users").doc(userRecord.uid).get();
  }

  async setVendor(userRecord: UserRecord, customer: VendorDTO) {
    await db.collection("users").doc(userRecord.uid).set({
      name: customer.name,
      email: customer.email,
      role: "vendor",
      pharmacy_name: customer.pharmacy_name,
      phone_number: customer.phone_number,
      address: customer.address,
      location: customer.location,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return db.collection("users").doc(userRecord.uid).get();
  }
}
