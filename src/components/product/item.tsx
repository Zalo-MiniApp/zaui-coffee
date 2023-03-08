import { FinalPrice } from "components/display/final-price";
import React, { FC } from "react";
import { Product } from "types/product";
import { Text } from "zmp-ui";
import { ProductPicker } from "./picker";

export const ProductItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <ProductPicker product={product}>
      {({ open }) => <div className="space-y-2" onClick={open}>
        <img src={product.image} className="aspect-square object-cover rounded-lg" />
        <Text>{product.name}</Text>
        <Text size="xxSmall" className="text-gray pb-2"><FinalPrice>{product}</FinalPrice></Text>
      </div>}
    </ProductPicker>
  );
}
