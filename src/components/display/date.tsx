import React, { FC } from "react";

export const DisplayDay: FC<{ value: number }> = ({ value }) => {
  return (
    <>
      {
        ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"][
          value - 1
        ]
      }
    </>
  );
};
