import { ProductItem } from "components/product/item";
import { StickyHeader } from "components/sticky-header";
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
        ref={((el) => {
          if (selectedCategoryId === category.id && el) {
            (el as HTMLButtonElement).scrollIntoView();
          }
        }) as any}
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

const CategoryPage: FC = () => {
  return (
    <Page className="flex flex-col">
      <StickyHeader title="Danh mục" className="flex-none" />
      <Suspense>
        <Box className="flex-none">
          <CategoryPicker />
        </Box>
        <Box className="flex-1 overflow-y-auto">
          <CategoryProducts />
        </Box>
      </Suspense>
    </Page>
  );
}

export default CategoryPage;