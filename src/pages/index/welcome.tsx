import React, { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValueLoadable } from "recoil";
import { userState } from "state";
import logo from 'static/logo.png';
import appConfig from '../../../app-config.json';

export const Welcome: FC = () => {
  const user = useRecoilValueLoadable(userState);

  return (
    <Box px={4} py={2} flex alignItems="center" className="app-header gap-2 bg-background sticky top-0 z-50">
      <img className="w-8 h-8 rounded-lg border-inset" src={logo} />
      <Box>
        <Text.Title size="small">{appConfig.app.title}</Text.Title>
        {user.state === 'hasValue' ? <Text size="xxSmall" className="text-gray">Welcome, {user.contents.name}!</Text> : <Text>...</Text>}
      </Box>
    </Box>
  );
}
