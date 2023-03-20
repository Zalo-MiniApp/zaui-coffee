import { ActionSheet } from "components/fullscreen-sheet";
import React, { FC, useEffect, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { nearbyStoresState, selectedStoreState } from "state";
import { Store } from "types/delivery";
import { displayDistance } from "utils/location";
import { Box, Icon, Text } from "zmp-ui";

export const StorePicker: FC = () => {
  const [visible, setVisible] = useState(false);
  const nearbyStores = useRecoilValueLoadable(nearbyStoresState);
  const [selectedStore, setSelectedStore] = useRecoilState(selectedStoreState);
  useEffect(() => {
    if (!selectedStore && nearbyStores.state === 'hasValue' && nearbyStores.contents.length > 0) {
      setSelectedStore(nearbyStores.contents[0]);
    }
  }, [nearbyStores])

  return (
    <>
      <Box flex>
        <Box className="flex-1 space-y-[2px]">
          {selectedStore && <>
            <div
              className="text-primary text-base font-medium"
              onClick={() => setVisible(true)}>
              {selectedStore.name}
            </div>
            <Text className="text-gray">
              {selectedStore.address}
            </Text>
          </>}
        </Box>
        <Icon icon="zi-chevron-right" />
      </Box>
      {nearbyStores.state === 'hasValue' && <ActionSheet
        title="Các cửa hàng ở gần bạn"
        visible={visible}
        onClose={() => setVisible(false)}
        actions={
          [
            nearbyStores.contents.map((store: Store & { distance?: number }) => ({
              text: store.distance ? `${store.name} - ${displayDistance(store.distance)}` : store.name,
              highLight: store.id === selectedStore?.id,
              onClick: () => {
                setSelectedStore(store)
              },
            })),
            [
              { text: "Đóng", close: true, danger: true },
            ]
          ]
        }
      >
      </ActionSheet>}
    </>
  );
}
