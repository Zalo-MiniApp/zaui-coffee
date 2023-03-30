import React, { FC } from "react";
import { Box, Radio } from "zmp-ui";

const sizes = ["S", "M", "L"] as const;

export type Size = typeof sizes[number];

export const SizePicker: FC<{
  value: Size;
  onChange: (size: Size) => void;
}> = ({ value, onChange }) => {
  return (
    <Box my={8}>
      <Radio.Group
        className="flex-1 grid grid-cols-3 justify-between"
        name="fruit"
        options={sizes.map((size) => ({ value: size, label: `Size ${size}` }))}
        value={value}
        onChange={(val) => {
          onChange(val as Size);
        }}
      />
    </Box>
  );
};
