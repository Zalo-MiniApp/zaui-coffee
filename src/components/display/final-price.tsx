import React, { FC, useMemo } from "react";
import { Product } from "types/product";
import { DisplayPrice } from "./price";

export const FinalPrice: FC<{ children: Product }> = ({ children }) => {
  const finalPrice = useMemo(() => {
    if (children.sale) {
      if (children.sale.type === 'fixed') {
        return children.price - children.sale.amount;
      } else {
        return children.price * (1 - children.sale.percent);
      }
    }
    return children.price;
  }, [children])
  return <DisplayPrice>{finalPrice}</DisplayPrice>;
}
