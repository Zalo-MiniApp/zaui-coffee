import React, { FC } from "react";
import { Box, Page, Text } from "zmp-ui";
import { CartItems } from "./cart-items";
import { Delivery } from "./delivery";
import { CartPreview } from "./preview";

const CartPage: FC = () => {
  return (
    <Page title="Giỏ hàng" className="flex flex-col">
      <CartItems />
      <Text.Header className="px-4">Hình thức nhận hàng</Text.Header>
      <Delivery />
      <Text className="text-gray px-4" size="xxSmall">
        Bằng việc tiến hành thanh toán, bạn đồng ý với điều kiện và điều khoản
        sử dụng của Zalo Mini App
      </Text>
      <Box height={32} className="flex-none" />
      <CartPreview />
    </Page>
  );
};

export default CartPage;
