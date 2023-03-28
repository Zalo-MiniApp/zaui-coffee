import React, { ReactNode, useMemo, useState } from "react";
import { Box, Button, Icon, Text } from "zmp-ui";

interface ListRendererProps<T> {
  title?: string;
  limit?: number;
  items: T[];
  renderLeft: (item: T) => ReactNode;
  renderRight: (item: T) => ReactNode;
  onClick?: (item: T) => void;
}

export function ListRenderer<T>({
  title,
  items,
  limit,
  renderLeft,
  renderRight,
  onClick,
}: ListRendererProps<T>) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapsedItems = useMemo(() => {
    return items.slice(0, limit);
  }, [items]);

  return (
    <Box className="bg-background rounded-xl">
      {title && <Text.Title className="p-4 pb-0">{title}</Text.Title>}
      <Box>
        {(isCollapsed ? collapsedItems : items).map((item, i, list) => (
          <div
            key={i}
            onClick={() => onClick?.(item)}
            className="flex gap-4 p-4 last:pb-0"
          >
            {renderLeft(item)}
            <Box className="space-y-1 flex-1 min-w-0 relative">
              {renderRight(item)}
              {i < list.length - 1 && (
                <hr className="absolute left-0 -right-4 -bottom-4 border-gray/25"></hr>
              )}
            </Box>
          </div>
        ))}
      </Box>
      {isCollapsed && collapsedItems.length < items.length ? (
        <Box className="p-2">
          <Button
            onClick={() => setIsCollapsed(false)}
            fullWidth
            suffixIcon={<Icon icon="zi-chevron-down" />}
            variant="tertiary"
            type="neutral"
          >
            Xem thêm
          </Button>
        </Box>
      ) : (
        <Box className="w-full h-4"></Box>
      )}
    </Box>
  );
}
