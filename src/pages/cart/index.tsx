import { useVirtualKeyboardVisible } from "hooks";
import React, { FC } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import { CartItems } from "./cart-items";
import { Delivery } from "./delivery";
import { CartPreview } from "./preview";

const CartPage: FC = () => {
  const keyboardVisible = useVirtualKeyboardVisible();

  return (
    <Page className="flex flex-col">
      <Header title="Giỏ hàng" showBackIcon={false} />
      <CartItems />
      <Text.Header className="px-4">Hình thức nhận hàng</Text.Header>
      <Delivery />
      <Text className="text-gray px-4" size="xxSmall">
        Bằng việc tiến hành thanh toán, bạn đồng ý với điều kiện và điều khoản
        sử dụng của Zalo Mini App
      </Text>
      <Box className="flex-1 min-h-[32px]" />
      {!keyboardVisible && <CartPreview />}
    </Page>
  );
};

export default CartPage;
