import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
}
