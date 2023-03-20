// Import React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";

import "swiper/css";
import "swiper/css/pagination";
import "zmp-ui/zaui.css";
import "./css/tailwind.css";
import "./css/app.scss";

// Import App Component
import App from "./components/app";
import appConfig from "../app-config.json";
import { configAppView } from "zmp-sdk";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

configAppView({
  hideAndroidBottomNavigationBar: true,
  hideIOSSafeAreaBottom: true,
  statusBarType: "transparent",
});

// Mount React App
const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));
