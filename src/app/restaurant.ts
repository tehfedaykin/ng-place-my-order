interface Menu {
  lunch: any[];
  dinner: any[];
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Imagez {
  thumbnail: string;
  owner: string;
  banner: string;
}

export class Restaurant {
  name: string;
  slug: string;
  images: Imagez;
  menu: Menu;
  address: Address;
  _id: string;
}
