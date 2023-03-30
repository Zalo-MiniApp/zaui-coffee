import React from "react";
import { FC, ReactNode, useEffect } from "react";

export const ConfigProvider: FC<{
  children: ReactNode;
  cssVariables: Record<string, string>;
}> = ({ children, cssVariables }) => {
  useEffect(() => {
    Object.keys(cssVariables)
      .filter((cv) => cssVariables[cv])
      .forEach((cv) => {
        document.documentElement.style.setProperty(`${cv}`, cssVariables[cv]);
      });
    return () => {
      Object.keys(cssVariables).forEach((cv) => {
        document.documentElement.style.removeProperty(`${cv}`);
      });
    };
  }, [cssVariables]);
  return <>{children}</>;
};
