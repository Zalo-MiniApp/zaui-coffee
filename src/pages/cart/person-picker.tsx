import { ListItem } from "components/list-item";
import React, { FC } from "react";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { phoneState, requestPhoneTriesState, userState } from "state";

export const PersonPicker: FC = () => {
  const user = useRecoilValueLoadable(userState);
  const phone = useRecoilValue(phoneState);

  return (
    <ListItem
      title={
        user.state === "hasValue" ? `${user.contents.name} - ${phone}` : phone
      }
      subtitle="Người nhận"
    />
  );
};

export const RequestPersonPickerPhone: FC = () => {
  const retry = useSetRecoilState(requestPhoneTriesState);
  const phone = useRecoilValueLoadable(phoneState);

  if (phone.state === "hasValue" && phone.contents) {
    return <PersonPicker />;
  }

  return (
    <ListItem
      onClick={() => retry((r) => r + 1)}
      title="Chọn người nhận"
      subtitle="Yêu cầu truy cập số điện thoại"
    />
  );
};
