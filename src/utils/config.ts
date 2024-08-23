import appConfig from "../../app-config.json";

export function getConfig<T>(getter: (config: typeof appConfig) => T) {
  return getter(appConfig);
}

export const PAYMENT_CHANNEL_SUBINFOS = {
  paypal: "ppuser@gmail.com",
  MASTER_CARD: "ATM ***1122",
  COD: "Thanh toán khi nhận hàng",
} as const;
