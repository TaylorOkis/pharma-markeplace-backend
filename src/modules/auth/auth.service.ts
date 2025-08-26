import { CustomerDTO, VendorDTO } from "./auth.dtos.js";
import { AuthRepository } from "./auth.repository.js";

export class AuthService {
  private authRepository = new AuthRepository();
  async registerUser(customer: CustomerDTO | VendorDTO) {
    const userRecord = await this.authRepository.createUserCredentials(
      customer
    );

    let user;
    if (customer.role === "customer") {
      user = await this.authRepository.setCustomer(
        userRecord,
        customer as CustomerDTO
      );
    } else {
      user = await this.authRepository.setVendor(
        userRecord,
        customer as VendorDTO
      );
    }

    return user.data;
  }
}
