import { ListRenderer } from "components/list-renderer";
import { StickyHeader } from "components/sticky-header";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Page, Text } from "zmp-ui";

const NotificationList: FC = () => {
  const notifications = useRecoilValue(notificationsState);
  return (
    <Box className="bg-background">
      <ListRenderer
        items={notifications}
        renderLeft={item => <img className="w-10 h-10 rounded-full" src={item.image} />}
        renderRight={item => <Box key={item.id}>
          <Text.Header>{item.title}</Text.Header>
          <Text size="small" className="text-gray overflow-hidden whitespace-nowrap text-ellipsis">{item.content}</Text>
        </Box>}
      />
      {/* {notifications.map(notification => )} */}
    </Box>
  );
}

const NotificationPage: FC = () => {
  return (
    <Page>
      <StickyHeader title="Thông báo" />
      <Box height={8} />
      <NotificationList />
    </Page>
  );
}

export default NotificationPage;
