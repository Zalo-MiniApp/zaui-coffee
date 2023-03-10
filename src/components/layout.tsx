import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { AnimationRoutes, Box } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "pages/index";
import CategoryPage from "pages/category";
import CartPage from "pages/cart";
import NotificationPage from "pages/notification";
import ProfilePage from "pages/profile";
import SearchPage from "pages/search";
import { useRecoilValueLoadable } from "recoil";
import { locationState } from "state";

export const Layout: FC = () => {
  useRecoilValueLoadable(locationState);

  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/notification" element={<NotificationPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
}
