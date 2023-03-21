# ZaUI Coffee

<p style="display: flex; flex-wrap: wrap; gap: 4px">
  <img alt="react" src="https://badgen.net/badge/react/18.2.0/?icon=npm" />
  <img alt="zmp-ui" src="https://badgen.net/badge/zmp-ui/1.5.0/purple?icon=npm" />
  <img alt="zmp-sdk" src="https://badgen.net/badge/zmp-sdk/2.23.3/green?icon=npm" />
  <img alt="recoil" src="https://badgen.net/badge/recoil/0.7.7/black?icon=npm" />
  <img alt="tailwindcss" src="https://badgen.net/badge/tailwindcss/3.2.7/cyan?icon=npm" />
  <img alt="scss" src="https://badgen.net/badge/scss/1.58.3/pink?icon=npm" />
</p>

Starter template for building a coffee shop's mini program. Main features:

- View coffee shop details and menus.
- Order coffee and snacks with customizable size options.
- Notifications management.
- Manage your cart and delivery options.
- View customer profile and membership.

|                          Preview                           |                                     Open Zalo and scan this QR                                      |
| :--------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| <img src="./docs/preview.svg" alt="Home page" width="250"> | <img src="https://logo-mapps.zdn.vn/qrcode/cc27187ebc3b55650c2a.png" alt="Entry point" width="250"> |

## Pre-requisites

1. [Install Node JS](https://nodejs.org/en/download/)
1. [Install Mini App DevTools CLI](https://mini.zalo.me/docs/dev-tools)
1. Download or clone this repository

## Setup

1. Install dependencies

   ```bash
   npm install
   ```

1. Start dev server using `zmp-cli`

   ```bash
   zmp start
   ```

1. Open `localhost:3000` on your browser and start coding 🔥

## Deployment

1. Create a mini program. For instruction on how to create a mini program, please refer to [Coffee Shop Tutorial](https://mini.zalo.me/docs/tutorial/step-1/#1-tạo-một-ứng-dụng-zalo-mini-program-mới-trên-trang-chủ-của-zalo-mini-program)

1. Setup payment methods if you want to accept online payments
   ![](./docs/payment.png "Payment method")

1. Deploy your mini program to Zalo using the mini app ID created in step 1.

   ```bash
   zmp login
   zmp deploy
   ```

1. Open Zalo and scan the QR code to preview your mini program

## Usage:

The repository contains sample UI components for building your application. You may wish to integrate internal APIs to fetch restaurants, menus, and booking history or modify the code to suit your business needs.

Folder structure:

- **`src`**: Contains all the logic source code of your Mini App. Inside the `src` folder:

  - **`components`**: Reusable components written in React.JS.
  - **`css`**: Stylesheets; pre-processors are also supported.
  - **`pages`**: A Page is also a component but will act as an entire view and must be registered inside `app.tsx` as a Route (https://mini.zalo.me/docs/zaui/components/router/ZMPRouter/).
  - **`statics`**: SVG and images that should be imported directly into bundle source code.
  - **`types`**: Contains TypeScript type and interface declarations.
  - **`utils`**: Reusable utility functions, such as distance calculation, date and time format, etc.
  - **`app.ts`**: Entry point of your Mini App.
  - **`global.d.ts`**: Contains TypeScript declarations for third-party modules and global objects.
  - **`state.ts`**: State management, containing Recoil's atoms and selectors (https://recoiljs.org/docs/introduction/getting-started#atom).

- **`app-config.json`**: Global configuration for your Mini App (https://mini.zalo.me/docs/framework/getting-started/app-config).

The other files (such as `tailwind.config.js`, `vite.config.ts`, `tsconfig.json`, `postcss.config.js`) are configurations for libraries used in your application. Visit the library's documentation to learn how to use them.

## Recipes

### Changing restaurant's name

Just change the `app.title` property in `app-config.json`:

```json
{
  "app": {
    "title": "ZaUI Coffee"
  }
}
```

### Changing coffee shop's logo

Visit [Zalo Mini Program](https://mini.zalo.me/) and go to your mini program's settings to change the logo.

### Changing color theme

You can change the primary and the secondary color theme by setting the colors in `app-config.json`:

```json
"template": {
  "primaryColor": "#0068ff",
},
```

### Load product list from server

<img src="./docs/products-fetching.webp" alt="Products fetching" width="250" align="right">

Just update the `productsState` selector in `src/state.ts` to use `fetch` and make an HTTP GET request to your server.

If the returned JSON structure is different from the template, you would need to map your product object to the corresponding `Product` interface. For example:

```ts
export const productsState = selector<Product[]>({
  key: "products",
  get: async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products.map(
      ({ id, title, price, images, description, category }) =>
        <Product>{
          id,
          name: title,
          price: price,
          image: images[0],
          description,
          categoryId: category,
        }
    );
  },
});
```

Feel free to create another `service` layer and put the network fetching logics inside. This template just provides the UI layer, you can customize the logic anyway you want.

## License

Copyright (c) Zalo Group. and its affiliates. All rights reserved.

The examples provided by Zalo Group are for non-commercial testing and evaluation
purposes only. Zalo Group reserves all rights not expressly granted.
