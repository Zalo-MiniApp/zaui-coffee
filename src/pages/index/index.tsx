import React, { Suspense, useEffect } from "react";
import { Box, Button, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { Welcome } from "./welcome";
import { Banner } from "./banner";
import { Categories } from "./categories";
import { Recommend } from "./recommend";
import { ProductList } from "./product-list";
import { Divider } from "components/divider";
import { useNavigate } from 'react-router'
import { configAppView } from "zmp-sdk";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    configAppView({
      actionBar: {
        title: "Danh mục",
        leftButton: 'back',
        hide: false,
      }
    })
  }, [])

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Inquiry />
        <Banner />
      <Button onClick={() => {
        navigate('/category')
      }}>Đến profile</Button>
        <Suspense>
          <Categories />
        </Suspense>
        <Divider />
        <Recommend />
        <Divider />
        <ProductList />
        <Divider />
      </Box>
    </Page>
  );
};

export default HomePage;
