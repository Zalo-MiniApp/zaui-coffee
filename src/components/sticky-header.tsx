import React, { FC } from "react";
import { Header } from "zmp-ui";
import { HeaderProps } from "zmp-ui/header";

export interface StickyHeaderProps extends HeaderProps { }

export const StickyHeader: FC<StickyHeaderProps> = ({ className, ...props }) => {

  return (
    <Header
      {...props}
      className={`app-header sticky no-border ${className ?? ''}`}
    />
  );
}
