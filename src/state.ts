import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk";
import coffeeIcon from 'static/category-coffee.svg';
import matchaIcon from 'static/category-matcha.svg';
import foodIcon from 'static/category-food.svg';
import milkteaIcon from 'static/category-milktea.svg';
import drinksIcon from 'static/category-drinks.svg';
import breadIcon from 'static/category-bread.svg';
import juiceIcon from 'static/category-juice.svg';
import productImage from 'static/product-coffee.png';
import logo from 'static/logo.png';
import { Category } from "types/category";
import { Product } from "types/product";
import { Cart } from "types/cart";
import { Notification } from "types/notification";

export const userState = selector({
  key: "user",
  get: () => getUserInfo({}).then(res => res.userInfo)
});

export const categoriesState = selector<Category[]>({
  key: 'categories',
  get: () => [
    { id: 'coffee', name: 'Cà phê', icon: coffeeIcon },
    { id: 'matcha', name: 'Trà xanh', icon: matchaIcon },
    { id: 'food', name: 'Đồ ăn vặt', icon: foodIcon },
    { id: 'milktea', name: 'Trà sữa', icon: milkteaIcon },
    { id: 'drinks', name: 'Giải khát', icon: drinksIcon },
    { id: 'bread', name: 'Bánh mỳ', icon: breadIcon },
    { id: 'juice', name: 'Nước ép', icon: juiceIcon },
  ]
})

const description = `There is a set of mock banners available <u>here</u> in three colours and in a range of standard banner sizes`

export const productsState = selector<Product[]>({
  key: 'products',
  get: () => [
    { id: 1, name: 'CloudTea Thơm Dừa Đá Xay', price: 25000, image: productImage, description, categoryId: 'coffee' },
    { id: 2, name: 'Đồ uống CANADA DRY siêu mát lạnh', price: 57000, image: productImage, description, categoryId: 'coffee' },
    { id: 3, name: 'CloudTea Thơm Dừa Đá Xay', price: 25000, image: productImage, description, categoryId: 'coffee' },
    { id: 4, name: 'Hi-Tea Phúc Bồn Tử Mandarin', price: 50000, image: productImage, description, categoryId: 'coffee' },
    { id: 5, name: 'CloudTea Thơm Dừa Đá Xay', price: 25000, image: productImage, description, categoryId: 'coffee' },
    { id: 6, name: 'Hi-Tea Phúc Bồn Tử Mandarin', price: 50000, image: productImage, description, categoryId: 'coffee' },
    { id: 7, name: 'CloudTea Thơm Dừa Đá Xay', price: 25000, image: productImage, description, categoryId: 'coffee' },
    { id: 8, name: 'Hi-Tea Phúc Bồn Tử Mandarin', price: 50000, image: productImage, description, categoryId: 'coffee' },
    {
      id: 9,
      name: 'CloudTea Thơm Dừa Đá Xay',
      image: productImage,
      price: 25000,
      sale: {
        type: 'percent',
        percent: 0.2
      },
      description,
      categoryId: 'coffee'
    },
    {
      id: 10,
      name: 'Đồ uống CANADA DRY siêu mát lạnh',
      image: productImage,
      price: 57000,
      sale: {
        type: 'fixed',
        amount: 7000
      },
      description,
      categoryId: 'coffee'
    },
  ]
})

export const recommendProductsState = selector<Product[]>({
  key: 'recommendProducts',
  get: ({ get }) => {
    const products = get(productsState);
    return products.filter(p => p.sale)
  }
});

export const selectedCategoryIdState = atom({
  key: 'selectedCategoryId',
  default: 'coffee'
})

export const productsByCategoryState = selector<Product[]>({
  key: 'productsByCategory',
  get: ({ get }) => {
    const categoryId = get(selectedCategoryIdState);
    const allProducts = get(productsState);
    return allProducts.filter(product => product.categoryId === categoryId);
  }
})

export const cartState = atom<Cart>({
  key: 'cart',
  default: []
})

export const totalQuantityState = selector({
  key: 'totalQuantity',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
})

export const totalPriceState = selector({
  key: 'totalPrice',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity * item.product.price, 0);
  }
})

export const notificationsState = atom<Notification[]>({
  key: 'notifications',
  default: [
    {
      id: 1,
      image: logo,
      title: 'Chào bạn mới',
      content: 'Cảm ơn đã sử dụng ZCoffee, bạn có thể dùng ứng dụng này để tiết kiệm thời gian xây dựng'
    }, {
      id: 2,
      image: logo,
      title: 'Giảm 50% lần đầu mua hàng',
      content: 'Nhập WELCOMEZCOFFEE để được giảm 50% giá trị đơn hàng đầu tiên order'
    }
  ]
})

export const keywordState = atom({
  key: 'keyword',
  default: ''
})

export const resultState = selector<Product[]>({
  key: 'result',
  get: ({ get }) => {
    const keyword = get(keywordState);
    const products = get(productsState);
    return products.filter(product => product.name.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
  }
})