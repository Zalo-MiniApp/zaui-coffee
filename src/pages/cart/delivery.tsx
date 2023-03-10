import { ListRenderer } from "components/list-renderer";
import React, { FC, Suspense } from "react";
import { Box, Icon, Input, Text } from "zmp-ui";
import { PersonPicker, RequestPersonPickerPhone } from "./person-picker";
import { StorePicker } from "./store-picker";
import { TimePicker } from "./time-picker";

export const Delivery: FC = () => {

  return (
    <Box py={3} px={4}>
      <ListRenderer
        items={[{
          left: <Icon icon="zi-location" className="my-auto" />,
          right: <StorePicker />
        }, {
          left: <Icon icon="zi-clock-1" className="my-auto" />,
          right: <Box flex>
            <Box className="flex-1 space-y-[2px]">
              <TimePicker />
              <Text className="text-gray">Thời gian nhận hàng</Text>
            </Box>
            <Icon icon="zi-chevron-right" />
          </Box>
        }, {
          left: <Icon icon="zi-user" className="my-auto" />,
          right: <Suspense fallback={<RequestPersonPickerPhone />}>
            <PersonPicker />
          </Suspense>
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
