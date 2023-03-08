import { FinalPrice } from "components/display/final-price";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSetRecoilState } from "recoil";
import { cartState } from "state";
import { CartItem } from "types/cart";
import { Product } from "types/product";
import { Box, Button, Sheet, Text } from "zmp-ui";
import { QuantityPicker } from "./quantity-picker";
import { Size, SizePicker } from "./size-picker";

export interface ProductPickerProps {
  product?: Product
  selected?: {
    size: Size
    quantity: number
  }
  children: (methods: { open: () => void, close: () => void }) => ReactNode
}

export const ProductPicker: FC<ProductPickerProps> = ({ children, product, selected }) => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState<Size>('M');
  const [quantity, setQuantity] = useState(1);
  const setCart = useSetRecoilState(cartState);

  useEffect(() => {
    if (selected) {
      setSize(selected.size);
      setQuantity(selected.quantity);
    }
  }, [selected])

  const addToCart = () => {
    if (product) {
      setCart(cart => {
        let res = [...cart];
        if (selected) { // updating an existing cart item, including quantity and size, or remove it if new quantity is 0
          const existed = cart.find(item => item.product.id === product.id && item.size === selected.size)!;
          if (quantity > 0) {
            res.splice(cart.indexOf(existed), 1, {
              ...existed,
              size,
              quantity
            })
          } else {
            res.splice(cart.indexOf(existed), 1)
          }
        } else { // adding new item to cart, or merging if it already existed before
          const existed = cart.find(item => item.product.id === product.id && item.size === size);
          if (existed) {
            res.splice(cart.indexOf(existed), 1, {
              ...existed,
              quantity: existed.quantity + quantity
            })
          } else {
            res = res.concat({
              product,
              size,
              quantity
            })
          }
        }
        return res;
      })
    }
    setVisible(false);
  }
  return (
    <>
      {children({
        open: () => setVisible(true),
        close: () => setVisible(false)
      })}
      {createPortal(
        <Sheet visible={visible} onClose={() => setVisible(false)}>
          {product && <Box className="space-y-6 mt-2" p={4}>
            <Box className="space-y-2">
              <Text.Title>{product.name}</Text.Title>
              <Text><FinalPrice>{product}</FinalPrice></Text>
              <Text><div dangerouslySetInnerHTML={{ __html: product.description ?? '' }}></div></Text>
            </Box>
            <Box className="space-y-4">
              <SizePicker value={size} onChange={setSize} />
              <QuantityPicker value={quantity} onChange={setQuantity} />
              {selected ? <Button variant={quantity > 0 ? "primary" : "secondary"} type={quantity > 0 ? "highlight" : "neutral"} fullWidth onClick={addToCart}>
                {quantity > 0 ? 'Thêm vào giỏ hàng' : 'Xoá'}
              </Button> : <Button disabled={!quantity} variant="primary" type="highlight" fullWidth onClick={addToCart}>
                Thêm vào giỏ hàng
              </Button>}
            </Box>
          </Box>}
        </Sheet>,
        document.body
      )}
    </>
  );
}
