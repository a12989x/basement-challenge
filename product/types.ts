export type TID = string;

export interface IOption {
  label: string;
  values: string[];
}

export interface IOptionCart {
  label: string;
  value: string;
}

export interface IProduct {
  id: TID;
  image: string;
  price: number;
  name: string;
  description: string;
  options: IOption[];
}

export interface IProductCart extends IOption {
  id: TID;
  image: string;
  price: number;
  name: string;
  description: string;
  options: IOption[];
  qty: number;
  cart: IOptionCart[];
}
