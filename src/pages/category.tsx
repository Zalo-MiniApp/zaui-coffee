import { ProductItem } from "components/product/item";
import React, { FC, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, productsByCategoryState, selectedCategoryIdState } from "state";
import { Box, Button, Header, Page, Text } from "zmp-ui";

const CategoryPicker: FC = () => {
  const categories = useRecoilValue(categoriesState);
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(selectedCategoryIdState);
  return (
    <Box flex className="bg-background gap-2 px-4 py-2 w-full overflow-x-auto">
      {categories.map(category => <Button
        key={category.id}
        variant="secondary"
        className="flex-none min-w-0"
        type={selectedCategoryId === category.id ? "highlight" : "neutral"}
        onClick={() => setSelectedCategoryId(category.id)}
      >
        {category.name}
      </Button>)}
    </Box>
  );
}

const CategoryProducts: FC = () => {
  const productsByCategory = useRecoilValue(productsByCategoryState);

  if (productsByCategory.length === 0) {
    return <Box className="px-4 py-3">
      <Box className="bg-background py-8 px-4 text-center rounded-xl">
        <Text>Không có sản phẩm nào trong danh mục này.</Text>
      </Box>
    </Box>
  }
  return (
    <Box className="bg-background grid grid-cols-2 gap-4 p-4">
      {productsByCategory.map(product => <ProductItem key={product.id} product={product} />)}
    </Box>
  );
}

export const CategoryPage: FC = () => {
  return (
    <Page>
      <Header title="Danh mục" className="sticky" />
      <Box>
        <Suspense>
          <CategoryPicker />
        </Suspense>
        <Suspense>
          <CategoryProducts />
        </Suspense>
      </Box>
    </Page>
  );
}
