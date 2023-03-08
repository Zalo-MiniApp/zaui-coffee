import React, { FC } from "react";
import { Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { NoAnimationHeader } from "./no-animation-header";
import { SearchResult } from "./result";

export const SearchPage: FC = () => {

  return (
    <Page className="flex flex-col">
      <NoAnimationHeader />
      <Inquiry />
      <SearchResult />
    </Page>
  );
}
