import React, { FC } from "react";
import { Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { SearchResult } from "./result";

const SearchPage: FC = () => {
  return (
    <Page title="Tìm kiếm">
      <Inquiry />
      <SearchResult />
    </Page>
  );
};

export default SearchPage;
