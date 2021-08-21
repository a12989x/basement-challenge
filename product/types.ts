export interface Option {
  label: string;
  values: string[];
}
export interface Product {
  id: string;
  image: string;
  price: number;
  name: string;
  description: string;
  options: Option[];
  qty?: number | undefined;
  cart?: IOptionCart[];
}

export interface IOptionCart {
  label: string;
  value: string;
}
