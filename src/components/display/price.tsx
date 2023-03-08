import React, { FC } from "react";

export const DisplayPrice: FC<{ children: number }> = ({ children }) => {
  return <>{children.toLocaleString()}đ</>;
}
