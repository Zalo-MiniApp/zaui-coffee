import { FinalPrice } from "components/display/final-price";
import { ProductPicker } from "components/product/picker";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { resultState } from "state";
import { Box, Text } from "zmp-ui";

export const SearchResult: FC = () => {
  const result = useRecoilValue(resultState);
  return (
    <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
      <Text.Title className="p-4 pt-0" size="small">Kết quả</Text.Title>
      {result.length > 0 ? <Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
        {result.map(product => <ProductPicker key={product.id} product={product}>
          {({ open }) => <div onClick={open} className="flex items-center gap-4">
            <img className="w-[88px] h-[88px] rounded-lg" src={product.image} />
            <Box className="space-y-2">
              <Text>{product.name}</Text>
              <Text size="xSmall" className="text-gray"><FinalPrice>{product}</FinalPrice></Text>
            </Box>
          </div>}
        </ProductPicker>)}
      </Box> : <Box className="py-10 text-center">
        <Text size="xSmall" className="text-gray">Không tìm thấy kết quả. Vui lòng thử lại</Text>
      </Box>}
    </Box>
  );
}
