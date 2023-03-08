import React, { FC, useState } from "react";
import { Box, Button } from "zmp-ui";

const sizes = ['M', 'L', 'XL'] as const;

export type Size = typeof sizes[number];

export const SizePicker: FC<{ value: Size, onChange: (size: Size) => void }> = ({ value, onChange }) => {

  return (
    <Box flex className="gap-2">
      {sizes.map(size => <Button
        key={size}
        className="min-w-0"
        variant="secondary"
        type={value === size ? "highlight" : "neutral"}
        onClick={() => onChange(size)}>
        Size {size}
      </Button>)}
    </Box>
  );
}
