export class CustomerDTO {
  name!: string;
  email!: string;
  phone_number!: string;
  password!: string;
  role!: "customer";
}

export class VendorDTO {
  name!: string;
  email!: string;
  pharmacy_name!: string;
  phone_number!: string;
  address!: string;
  location!: string;
  password!: string;
  role!: "vendor";
}
