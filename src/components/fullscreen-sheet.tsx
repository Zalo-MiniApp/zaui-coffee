import React, { FC, useEffect } from "react";
import { setNavigationBarColor } from "zmp-sdk";
import { Sheet as OrginalSheet } from 'zmp-ui';
import { ActionSheetProps, SheetProps } from "zmp-ui/sheet";

const useMatchStatusTextColor = (visible?: boolean) => {
  useEffect(() => {
    if (visible) {
      setNavigationBarColor({
        textColor: 'white',
        color: ''
      })
    } else {
      setNavigationBarColor({
        textColor: 'black',
        color: ''
      })
    }
  }, [visible]);

}

export const Sheet: FC<Omit<SheetProps, 'ref'>> = (props) => {
  useMatchStatusTextColor(props.visible);
  return (
    <OrginalSheet {...props} />
  );
}


export const ActionSheet: FC<Omit<ActionSheetProps, 'ref'>> = (props) => {
  useMatchStatusTextColor(props.visible);
  return (
    <OrginalSheet.Actions {...props} />
  );
}
