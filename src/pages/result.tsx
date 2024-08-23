import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Box, Button, Header, Page, Spinner, Text, useNavigate } from "zmp-ui";
import subscriptionDecor from "static/subscription-decor.svg";
import {
  AsyncCallbackFailObject,
  CheckTransactionReturns,
  Payment,
} from "zmp-sdk";
import { useLocation } from "react-router";
import { useResetRecoilState } from "recoil";
import { cartState } from "state";
import {
  IconPaymentFail,
  IconPaymentLoading,
  IconPaymentSuccess,
} from "components/payment-icon";

interface RenderResultProps {
  title?: string;
  message: string;
  icon: ReactNode;
}

const CheckoutResultPage: FC = () => {
  const { state } = useLocation();
  const [paymentResult, setPaymentResult] = useState<boolean>();
  const navigate = useNavigate();
  const clearCart = useResetRecoilState(cartState);

  useEffect(() => {
    if (state && "orderId" in state) {
      const { orderId } = state;
      // update order status - this should be done by your server
      fetch(
        `https://webvcwaumtpmsarmgbhl.supabase.co/functions/v1/update-order-status`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId, appId: window.APP_ID }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.warn(json);
          setPaymentResult(!json.error);
          if (!json.error) {
            clearCart();
          }
        });
    }
  }, []);

  return (
    <Page className="flex flex-col bg-white">
      <Header title="Kết quả thanh toán" />
      {(function (render: (result: RenderResultProps) => ReactNode) {
        if (paymentResult === true) {
          return render({
            title: "Thanh toán thành công",
            message: `Đơn hàng của bạn đã được thanh toán thành công. Đơn hàng của bạn sẽ được xử lý trong thời gian sớm nhất.`,
            icon: <IconPaymentSuccess />,
          });
        }
        if (paymentResult === false) {
          return render({
            title: "Thanh toán thất bại",
            message: `Có lỗi trong quá trình xử lý, vui lòng kiểm tra lại hoặc liên hệ Shop để được hỗ trợ`,
            icon: <IconPaymentFail />,
          });
        }
        return render({
          message: `Hệ thống đang xử lý thanh toán, vui lòng chờ trong ít phút...`,
          icon: <IconPaymentLoading />,
        });
      })(({ title, message, icon }: RenderResultProps) => (
        <Box className="p-6 space-y-3 flex-1 flex flex-col justify-center items-center text-center">
          <div className="p-4">{icon}</div>
          {title && (
            <Text size="xLarge" className="font-medium">
              {title}
            </Text>
          )}
          <Text className="text-[#6F7071]">{message}</Text>
        </Box>
      ))}
      {paymentResult !== undefined && (
        <div className="p-4">
          <Button fullWidth onClick={() => navigate("/", { replace: true })}>
            {paymentResult ? "Hoàn tất" : "Đóng"}
          </Button>
        </div>
      )}
    </Page>
  );
};

export default CheckoutResultPage;
