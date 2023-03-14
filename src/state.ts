import { atom, selector } from "recoil";
import { getLocation, getPhoneNumber, getUserInfo } from "zmp-sdk";
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
import { calculateDistance } from "utils/location";
import { Store } from "types/delivery";
import { calcFinalPrice } from "utils/price";
import { wait } from "utils/async";

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
  get: async () => {
    await wait(3000);
    return [
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
  }
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
    return cart.reduce((total, item) => total + item.quantity * calcFinalPrice(item.product), 0);
  }
})

export const notificationsState = atom<Notification[]>({
  key: 'notifications',
  default: [
    {
      id: 1,
      image: logo,
      title: 'Chào bạn mới',
      content: 'Cảm ơn đã sử dụng ZaUI Coffee, bạn có thể dùng ứng dụng này để tiết kiệm thời gian xây dựng'
    }, {
      id: 2,
      image: logo,
      title: 'Giảm 50% lần đầu mua hàng',
      content: 'Nhập WELCOME để được giảm 50% giá trị đơn hàng đầu tiên order'
    }
  ]
})

export const keywordState = atom({
  key: 'keyword',
  default: ''
})

export const resultState = selector<Product[]>({
  key: 'result',
  get: async ({ get }) => {
    const keyword = get(keywordState);
    const products = get(productsState);
    await wait(1000);
    return products.filter(product => product.name.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
  }
})

export const storesState = atom<Store[]>({
  key: 'stores',
  default: [
    {
      id: 1,
      name: 'VNG Campus Store',
      address: 'Khu chế xuất Tân Thuận, Z06, Số 13, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam',
      lat: 10.741639,
      long: 106.714632
    },
    {
      id: 2,
      name: 'The Independence Palace',
      address: '135 Nam Kỳ Khởi Nghĩa, Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam',
      lat: 10.779159,
      long: 106.695271
    },
    {
      id: 3,
      name: 'Saigon Notre-Dame Cathedral Basilica',
      address: '1 Công xã Paris, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam',
      lat: 10.779738,
      long: 106.699092
    },
    {
      id: 4,
      name: 'Bình Quới Tourist Village',
      address: '1147 Bình Quới, phường 28, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam',
      lat: 10.831098,
      long: 106.733128
    },
    {
      id: 5,
      name: 'Củ Chi Tunnels',
      address: 'Phú Hiệp, Củ Chi, Thành phố Hồ Chí Minh, Việt Nam',
      lat: 11.051655,
      long: 106.494249
    }
  ]
})

export const nearbyStoresState = selector({
  key: 'nearbyStores',
  get: ({ get }) => {
    // Get the current location from the locationState atom
    const location = get(locationState);

    // Get the list of stores from the storesState atom
    const stores = get(storesState);

    // Calculate the distance of each store from the current location
    if (location) {
      const storesWithDistance = stores.map((store) => ({
        ...store,
        distance: calculateDistance(location.latitude, location.longitude, store.lat, store.long)
      }));

      // Sort the stores by distance from the current location
      const nearbyStores = storesWithDistance.sort((a, b) => a.distance - b.distance);

      return nearbyStores;
    } else {
      return stores;
    }
  }
})

export const selectedStoreState = atom<Store | null>({
  key: 'selectedStore',
  default: null
})

export const selectedDeliveryTimeState = atom({
  key: 'selectedDeliveryTime',
  default: +new Date()
})

export const retryRequestPhoneState = atom({
  key: 'retryRequestPhone',
  default: 0
})

export const locationState = selector<{ latitude: string, longitude: string } | false>({
  key: 'location',
  get: async () => {
    try {
      const { latitude, longitude, token } = await getLocation({});
      if (latitude && longitude) {
        return { latitude, longitude }
      };
      console.warn('Sử dụng token này để truy xuất vị trí chính xác của người dùng', token);
      console.warn('Chi tiết tham khảo: ', 'https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app');
      console.warn('Giả lập vị trí mặc định: VNG Campus');
      return {
        latitude: '10.7287',
        longitude: '106.7317'
      }
    } catch (error) {
      return false;
    }
  }
})

export const phoneState = selector<string | boolean>({
  key: 'phone',
  get: async ({ get }) => {
    try {
      get(retryRequestPhoneState);
      const { number, token } = await getPhoneNumber({});
      if (number) {
        return number;
      };
      console.warn('Sử dụng token này để truy xuất số điện thoại của người dùng', token);
      console.warn('Chi tiết tham khảo: ', 'https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app');
      console.warn('Giả lập số điện thoại mặc định: 0337076898');
      return '0337076898';
    } catch (error) {
      return false;
    }
  }
})
