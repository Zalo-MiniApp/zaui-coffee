import { StickyHeader } from "components/sticky-header";
import React, { FC } from "react";
import { Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { SearchResult } from "./result";

const SearchPage: FC = () => {

  return (
    <Page className="flex flex-col">
      <StickyHeader
        title="Tìm kiếm"
        className="flex-none"
      />
      <Inquiry />
      <SearchResult />
    </Page>
  );
}

export default SearchPage;