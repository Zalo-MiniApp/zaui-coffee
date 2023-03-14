import React, { FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { phoneState, retryRequestPhoneState, userState } from "state";
import { Box, Icon, Text } from "zmp-ui";

export const PersonPicker: FC = () => {
  const user = useRecoilValue(userState);
  const phone = useRecoilValue(phoneState);

  if (!phone) {
    return <RequestPersonPickerPhone />
  }

  return (
    <Box flex>
      <Box className="flex-1 space-y-[2px]">
        <Text.Title size="small" className="text-primary">{`${user.name} - ${phone}`}</Text.Title>
        <Text className="text-gray">Người nhận</Text>
      </Box>
      <Icon icon="zi-chevron-right" />
    </Box>
  );
}

export const RequestPersonPickerPhone: FC = () => {
  const retry = useSetRecoilState(retryRequestPhoneState);
  return (
    <Box flex>
      <Box className="flex-1 space-y-[2px]">
        <div
          className="text-primary text-base font-medium"
          onClick={() => retry(k => k + 1)}
        >
          Chọn người nhận
        </div>
        <Text className="text-gray">Yêu cầu truy cập số điện thoại</Text>
      </Box>
      <Icon icon="zi-chevron-right" />
    </Box>
  );
}