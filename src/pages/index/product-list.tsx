import React, { FC } from "react";
import { Section } from "components/section";
import { useRecoilValue } from "recoil";
import { productsState } from "state";
import { Box } from "zmp-ui";
import { ProductItem } from "components/product/item";

export const ProductList: FC = () => {
  const products = useRecoilValue(productsState);

  return (
    <Section title="Danh sách sản phẩm">
      <Box className="grid grid-cols-2 gap-4">
        {products.map(product => <ProductItem key={product.id} product={product} />)}
      </Box>
    </Section>
  );
}
