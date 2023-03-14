import React, { FC, useMemo } from "react";
import { Product } from "types/product";
import { calcFinalPrice } from "utils/price";
import { DisplayPrice } from "./price";

export const FinalPrice: FC<{ children: Product }> = ({ children }) => {
  const finalPrice = useMemo(() => calcFinalPrice(children), [children])
  return <DisplayPrice>{finalPrice}</DisplayPrice>;
}
