import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, Box } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "pages/index";
import { CategoryPage } from "pages/category";
import { Navigation } from "./navigation";
import { CartPage } from "pages/cart";
import { NotificationPage } from "pages/notification";
import { ProfilePage } from "pages/profile";
import { SearchPage } from "pages/search";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <Box flex flexDirection="column" className="h-screen">
              <Box className="flex-1 overflow-y-auto">
                <AnimationRoutes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/search" element={<SearchPage />}></Route>
                  <Route path="/category" element={<CategoryPage />}></Route>
                  <Route path="/notification" element={<NotificationPage />}></Route>
                  <Route path="/cart" element={<CartPage />}></Route>
                  <Route path="/profile" element={<ProfilePage />}></Route>
                </AnimationRoutes>
              </Box>
              <Navigation />
            </Box>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
