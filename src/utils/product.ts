import { createOrder } from "zmp-sdk";
import { Product } from "types/product";
import { getConfig } from "./config";

export function calcFinalPrice(product: Product) {
  if (product.sale) {
    if (product.sale.type === "fixed") {
      return product.price - product.sale.amount;
    } else {
      return product.price * (1 - product.sale.percent);
    }
  }
  return product.price;
}

export function getDummyImage(filename: string) {
  return `https://zalo-miniapp.github.io/zaui-coffee/dummy/${filename}`;
}

const pay = (amount: number, description?: string) =>
  createOrder({
    desc:
      description ??
      `Thanh toán cho ${getConfig((config) => config.app.title)}`,
    item: [],
    amount: amount,
    success: (data) => {
      console.log("Payment success: ", data);
    },
    fail: (err) => {
      console.log("Payment error: ", err);
    },
  });

export default pay;
