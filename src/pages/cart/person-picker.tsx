import React, { FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { phoneState, userState } from "state";
import { getPhoneNumber, openOutApp } from "zmp-sdk";
import { Box, Icon, Text, useSnackbar } from "zmp-ui";

export const PersonPicker: FC = () => {
  const user = useRecoilValue(userState);
  const phone = useRecoilValue(phoneState);
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
  const { openSnackbar } = useSnackbar();
  const setPhone = useSetRecoilState(phoneState);
  return (
    <Box flex>
      <Box className="flex-1 space-y-[2px]">
        <div
          className="text-primary text-base font-medium"
          onClick={async () => {
            const { token, number } = await getPhoneNumber({});
            if (number) {
              setPhone(number);
            } else {
              openSnackbar({
                text: `Gửi token này lên server của bạn để lấy số điện thoại người dùng: ${(token ?? '').substr(0, 10)}...`,
                type: 'info',
                icon: true,
                verticalAction: true,
                action: {
                  text: 'Tìm hiểu thêm',
                  close: true,
                  onClick: () => openOutApp({ url: "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app" })
                },
                onClose: () => setPhone(`0337076898`)
              })
            }
          }}
        >
          Chọn người nhận
        </div>
        <Text className="text-gray">Yêu cầu truy cập số điện thoại</Text>
      </Box>
      <Icon icon="zi-chevron-right" />
    </Box>
  );
}