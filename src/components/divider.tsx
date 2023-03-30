import React, { FC } from "react";
import { Box } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

export const Divider: FC<{ size?: number; className?: string } & BoxProps> = ({
  size = 8,
  ...props
}) => {
  return (
    <Box
      style={{
        minHeight: size,
        backgroundColor: "var(--zmp-background-color)",
      }}
      {...props}
    />
  );
};
