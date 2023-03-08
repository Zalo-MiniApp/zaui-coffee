import { Size } from "components/product/size-picker";
import { Product } from "./product";

export interface CartItem {
  product: Product
  size: Size
  quantity: number
}

export type Cart = CartItem[]