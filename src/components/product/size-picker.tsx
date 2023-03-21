import React, { FC } from "react";
import { Box, Radio } from "zmp-ui";

const sizes = ['S', 'M', 'L'] as const;

export type Size = typeof sizes[number];

export const SizePicker: FC<{ value: Size, onChange: (size: Size) => void }> = ({ value, onChange }) => {

  return (
    <Box flex className="gap-2 my-8">
      <Radio.Group
        className="flex-1 grid grid-cols-3 justify-between"
        name="fruit"
        defaultValue="apple"
        options={sizes.map(size => ({ value: size, label: `Size ${size}` }))}
        onChange={val => {
          onChange(val as Size);
        }}
      />
    </Box>
  );
}
