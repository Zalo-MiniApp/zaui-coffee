import { ListItem } from "components/list-item";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import { paymentState } from "state";
import { PAYMENT_CHANNEL_SUBINFOS } from "utils/config";
import { Payment } from "zmp-sdk";

export const PaymentMethodPicker: FC = () => {
  const [payment, setPayment] = useRecoilState(paymentState);

  return (
    <>
      <ListItem
        onClick={async () => {
          const method = await Payment.selectPaymentMethod({
            selectedMethod: payment ? { method: payment.method } : undefined,
            channels: Object.keys(PAYMENT_CHANNEL_SUBINFOS).map((method) => ({
              method,
              subInfo: PAYMENT_CHANNEL_SUBINFOS[method],
            })),
          });
          setPayment(method);
        }}
        title="Phương thức thanh toán"
        subtitle={
          payment
            ? `${payment.displayName} - ${
                PAYMENT_CHANNEL_SUBINFOS[payment.method]
              }`
            : "Chọn phương thức"
        }
      />
    </>
  );
};
