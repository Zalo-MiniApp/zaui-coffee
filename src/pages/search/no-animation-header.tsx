import React, { FC } from "react";
import { Header, useNavigate } from "zmp-ui";
import { To } from "zmp-ui/useNavigate";

export const NoAnimationHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <Header
      onBackClick={() => navigate(-1 as To, {
        animate: false
      })}
      title="Tìm kiếm"
      className="sticky flex-none no-border"
    />
  );
}
