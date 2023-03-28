import { getConfig } from "components/config-provider";
import React, { FC } from "react";

export const DisplayPrice: FC<{ children: number }> = ({ children }) => {
  const symbol = getConfig((config) => config.template.currencySymbol);
  if (getConfig((config) => config.template.prefixCurrencySymbol)) {
    return (
      <>
        {symbol}
        {children.toLocaleString()}
      </>
    );
  } else {
    return (
      <>
        {children.toLocaleString()}
        {symbol}
      </>
    );
  }
};
