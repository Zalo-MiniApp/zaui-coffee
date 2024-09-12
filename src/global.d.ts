declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare interface Window {
  ZaloJavaScriptInterface?: {
    getStatusBarHeight: () => number;
  };
}
