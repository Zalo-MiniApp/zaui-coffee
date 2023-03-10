import { Product } from "types/product";

export function calcFinalPrice(product: Product) {
  if (product.sale) {
    if (product.sale.type === 'fixed') {
      return product.price - product.sale.amount;
    } else {
      return product.price * (1 - product.sale.percent);
    }
  }
  return product.price
}