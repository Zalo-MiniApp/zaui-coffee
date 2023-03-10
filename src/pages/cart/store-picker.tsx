import React, { FC, ReactNode, useState } from "react";
import { useRecoilValue, useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { locationState, nearbyStoresState, selectedStoreState, storesState } from "state";
import { Store } from "types/delivery";
import { displayDistance } from "utils/location";
import { getLocation, openOutApp } from "zmp-sdk";
import { Box, Icon, Sheet, Text, useSnackbar } from "zmp-ui";


export const StorePicker: FC = () => {
  const { openSnackbar } = useSnackbar();
  const setLocation = useSetRecoilState(locationState);
  const [visible, setVisible] = useState(false);
  const nearbyStores = useRecoilValueLoadable(nearbyStoresState);
  const allStores = useRecoilValue(storesState);
  const [selectedStore, setSelectedStore] = useRecoilState(selectedStoreState);
  return (
    <>
      <Box flex>
        <Box className="flex-1 space-y-[2px]">
          <div
            className="text-primary text-base font-medium"
            onClick={async () => {
              const { token, latitude, longitude } = await getLocation({});
              if (latitude && longitude) {
                setLocation({ latitude, longitude });
                setVisible(true);
              } else {
                openSnackbar({
                  text: `Gửi token này lên server của bạn để lấy thông tin vị trí người dùng: ${(token ?? '').substr(0, 10)}...`,
                  type: 'info',
                  icon: true,
                  verticalAction: true,
                  action: {
                    text: 'Tìm hiểu thêm',
                    close: true,
                    onClick: () => openOutApp({ url: "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app" })
                  },
                  onClose: () => {
                    setVisible(true);
                  }
                })
              }
            }}>
            {selectedStore ? selectedStore.name : 'Chọn cửa hàng'}
          </div>
          <Text className="text-gray">
            {selectedStore ? selectedStore.address : 'Yêu cầu truy cập vị trí'}
          </Text>
        </Box>
        <Icon icon="zi-chevron-right" />
      </Box>
      <Sheet.Actions
        title={nearbyStores.state === 'hasValue' ? "Các cửa hàng ở gần bạn" : "Chưa thể xác định vị trí của bạn"}
        visible={visible}
        onClose={() => setVisible(false)}
        actions={
          [
            (nearbyStores.state === 'hasValue' ? nearbyStores.contents : allStores).map((store: Store & { distance?: number }) => ({
              text: store.distance ? `${store.name} - ${displayDistance(store.distance)}` : store.name,
              highLight: store.id === selectedStore?.id,
              onClick: () => {
                setSelectedStore(store)
              },
            })),
            [
              { text: "Đóng", close: true, danger: true },
            ]
          ]}
      >
      </Sheet.Actions>
    </>
  );
}
