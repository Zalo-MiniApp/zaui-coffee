import { useMatchStatusTextColor } from "hooks";
import React, { FC } from "react";
import { Sheet as OrginalSheet } from "zmp-ui";
import { ActionSheetProps, SheetProps } from "zmp-ui/sheet";

export const Sheet: FC<Omit<SheetProps, "ref">> = (props) => {
  useMatchStatusTextColor(props.visible);
  return <OrginalSheet {...props} />;
};

export const ActionSheet: FC<Omit<ActionSheetProps, "ref">> = (props) => {
  useMatchStatusTextColor(props.visible);
  return <OrginalSheet.Actions {...props} />;
};
