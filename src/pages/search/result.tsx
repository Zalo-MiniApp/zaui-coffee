import { FinalPrice } from "components/display/final-price";
import { ProductPicker } from "components/product/picker";
import { ProductSearchResultSkeleton } from "components/skeletons";
import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { resultState } from "state";
import { Box, Text } from "zmp-ui";

const SearchResultContent: FC = () => {
  const result = useRecoilValue(resultState);
  return (
    <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
      <Text.Title className="p-4 pt-0" size="small">
        Kết quả ({result.length})
      </Text.Title>
      {result.length > 0 ? (
        <Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
          {result.map((product) => (
            <ProductPicker key={product.id} product={product}>
              {({ open }) => (
                <div onClick={open} className="flex items-center space-x-4">
                  <img
                    className="w-[88px] h-[88px] rounded-lg"
                    src={product.image}
                  />
                  <Box className="space-y-2">
                    <Text>{product.name}</Text>
                    <Text size="xSmall" className="text-gray">
                      <FinalPrice>{product}</FinalPrice>
                    </Text>
                  </Box>
                </div>
              )}
            </ProductPicker>
          ))}
        </Box>
      ) : (
        <Box className="flex-1 flex justify-center items-center pb-24">
          <Text size="xSmall" className="text-gray">
            Không tìm thấy kết quả. Vui lòng thử lại
          </Text>
        </Box>
      )}
    </Box>
  );
};

const SearchResultFallback: FC = () => {
  const result = [...new Array(5)];
  return (
    <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
      <Text.Title className="p-4 pt-0" size="small">
        Đang tìm kiếm...
      </Text.Title>
      <Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
        {result.map((_, i) => (
          <ProductSearchResultSkeleton key={i} />
        ))}
      </Box>
    </Box>
  );
};

export const SearchResult: FC = () => {
  return (
    <Suspense fallback={<SearchResultFallback />}>
      <SearchResultContent />
    </Suspense>
  );
};
