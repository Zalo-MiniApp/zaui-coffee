import { DisplayPrice } from "components/display/price";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { totalPriceState, totalQuantityState } from "state";
import { Box, Button, Text } from "zmp-ui";

export const CartPreview: FC = () => {
  const quantity = useRecoilValue(totalQuantityState);
  const price = useRecoilValue(totalPriceState);

  if (!quantity) {
    return <></>
  }

  return (
    <Box flex className="sticky bottom-0 bg-background p-4 gap-4">
      <Box flex flexDirection="column" justifyContent="space-between" className="min-w-[120px] flex-none">
        <Text className="text-gray" size="xSmall">{quantity} sản phẩm</Text>
        <Text.Title size="large"><DisplayPrice>{price}</DisplayPrice></Text.Title>
      </Box>
      <Button type="highlight" fullWidth>
        Đặt hàng
      </Button>
    </Box>
  );
}
