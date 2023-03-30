import { CategoryId } from "./category";

export interface PercentSale {
  type: "percent";
  percent: number;
}

export interface FixedSale {
  amount: number;
  type: "fixed";
}

export type Sale = PercentSale | FixedSale;

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  categoryId: CategoryId[];
  description?: string;
  sale?: Sale;
}
