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
    if (
      !selectedStore &&
      nearbyStores.state === "hasValue" &&
      nearbyStores.contents.length > 0
    ) {
      setSelectedStore(nearbyStores.contents[0]);
    }
  }, [nearbyStores]);

  return (
    <>
      <Box flex className="space-x-2">
        <Box className="flex-1 space-y-[2px] min-w-0">
          {selectedStore && (
            <>
              <Text
                size="small"
                className="text-primary text-sm font-medium"
                onClick={() => setVisible(true)}
              >
                {selectedStore.name}
              </Text>
              <Text
                size="xSmall"
                className="text-gray whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {selectedStore.address}
              </Text>
            </>
          )}
        </Box>
        <Icon icon="zi-chevron-right" className="flex-none" />
      </Box>
      {nearbyStores.state === "hasValue" && (
        <ActionSheet
          title="Các cửa hàng ở gần bạn"
          visible={visible}
          onClose={() => setVisible(false)}
          actions={[
            nearbyStores.contents.map(
              (store: Store & { distance?: number }) => ({
                text: store.distance
                  ? `${store.name} - ${displayDistance(store.distance)}`
                  : store.name,
                highLight: store.id === selectedStore?.id,
                onClick: () => {
                  setSelectedStore(store);
                },
              })
            ),
            [{ text: "Đóng", close: true, danger: true }],
          ]}
        ></ActionSheet>
      )}
    </>
  );
};
