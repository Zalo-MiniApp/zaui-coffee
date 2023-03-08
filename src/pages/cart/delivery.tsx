import { ListRenderer } from "components/list-renderer";
import React, { FC } from "react";
import { Box, Icon, Input, Text } from "zmp-ui";

export const Delivery: FC = () => {
  return (
    <Box py={3} px={4}>
      <ListRenderer
        items={[{
          left: <Icon icon="zi-location" className="my-auto" />,
          right: <Box flex>
            <Box className="flex-1 space-y-[2px]">
              <Text.Title size="small" className="text-primary">VNG Campus Store</Text.Title>
              <Text className="text-gray">Khu chế xuất Tân Thuận, Z06, Số 13, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam</Text>
            </Box>
            <Icon icon="zi-chevron-right" />
          </Box>
        }, {
          left: <Icon icon="zi-clock-1" className="my-auto" />,
          right: <Box flex>
            <Box className="flex-1 space-y-[2px]">
              <Text.Title size="small" className="text-primary">14h00 - 14h30, 20/02/2023</Text.Title>
              <Text className="text-gray">Thời gian nhận hàng</Text>
            </Box>
            <Icon icon="zi-chevron-right" />
          </Box>
        }, {
          left: <Icon icon="zi-user" className="my-auto" />,
          right: <Box flex>
            <Box className="flex-1 space-y-[2px]">
              <Text.Title size="small" className="text-primary">Duy Nguyen - 0337076898</Text.Title>
              <Text className="text-gray">Người nhận</Text>
            </Box>
            <Icon icon="zi-chevron-right" />
          </Box>
        }, {
          left: <Icon icon="zi-note" className="my-auto" />,
          right: <Box flex>
            <Input.TextArea
              placeholder="Nhập ghi chú..."
              className="border-none px-0"
              inputElement={<Input />}
              autoSize={{
                minRows: 1
              }}
            />
          </Box>
        }]}
        limit={4}
        renderLeft={item => item.left}
        renderRight={item => item.right}
      />
    </Box>
  );
}
