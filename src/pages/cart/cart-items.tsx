import { FinalPrice } from "components/display/final-price";
import { DisplaySelectedOptions } from "components/display/selected-options";
import { ListRenderer } from "components/list-renderer";
import { ProductPicker } from "components/product/picker";
import React, { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "state";
import { CartItem } from "types/cart";
import { Box, Text } from "zmp-ui";

export const CartItems: FC = () => {
  const cart = useRecoilValue(cartState);
  const [editingItem, setEditingItem] = useState<CartItem | undefined>();

  return (
    <Box className="py-3 px-4">
      {cart.length > 0 ? (
        <ProductPicker product={editingItem?.product} selected={editingItem}>
          {({ open }) => (
            <ListRenderer
              items={cart}
              limit={3}
              onClick={(item) => {
                setEditingItem(item);
                open();
              }}
              renderKey={({ product, options, quantity }) =>
                JSON.stringify({ product: product.id, options, quantity })
              }
              renderLeft={(item) => (
                <img
                  className="w-10 h-10 rounded-lg"
                  src={item.product.image}
                />
              )}
              renderRight={(item) => (
                <Box flex className="space-x-1">
                  <Box className="space-y-1 flex-1">
                    <Text size="small">{item.product.name}</Text>
                    <Text className="text-gray" size="xSmall">
                      <FinalPrice options={item.options}>
                        {item.product}
                      </FinalPrice>
                    </Text>
                    <Text className="text-gray" size="xxxSmall">
                      <DisplaySelectedOptions options={item.options}>
                        {item.product}
                      </DisplaySelectedOptions>
                    </Text>
                  </Box>
                  <Text className="text-primary font-medium" size="small">
                    x{item.quantity}
                  </Text>
                </Box>
              )}
            />
          )}
        </ProductPicker>
      ) : (
        <Text
          className="bg-background rounded-xl py-8 px-4 text-center text-gray"
          size="xxSmall"
        >
          Không có sản phẩm trong giỏ hàng
        </Text>
      )}
    </Box>
  );
};
