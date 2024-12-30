import React, { FC, ReactNode, useEffect, useState } from "react";
import { Box, Button, Header, Page, Text, useNavigate } from "zmp-ui";
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
  const navigate = useNavigate();
  const { state } = useLocation();
  const [paymentResult, setPaymentResult] = useState<
    CheckTransactionReturns | AsyncCallbackFailObject
  >();

  useEffect(() => {
    let timeout;

    const check = () => {
      let data = state;
      if (data) {
        if ("path" in data) {
          data = data.path;
        } else if ("data" in data) {
          data = data.data;
        }
      } else {
        data = window.location.search.slice(1);
      }
      Payment.checkTransaction({
        data,
        success: (rs) => {
          // Kết quả giao dịch khi gọi api thành công
          setPaymentResult(rs);
          if (rs.resultCode === 0) {
            // Thanh toán đang được xử lý
            timeout = setTimeout(check, 3000);
          }
        },
        fail: (err) => {
          // Kết quả giao dịch khi gọi api thất bại
          setPaymentResult(err);
        },
      });
    };

    check();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const clearCart = useResetRecoilState(cartState);
  useEffect(() => {
    if (paymentResult?.resultCode >= 0) {
      clearCart();
    }
  }, [paymentResult]);

  return (
    <Page className="flex flex-col bg-white">
      <Header title="Kết quả thanh toán" />
      {(function (render: (result: RenderResultProps) => ReactNode) {
        if (paymentResult && paymentResult.resultCode) {
          if (paymentResult.resultCode === 1) {
            return render({
              title: "Thanh toán thành công",
              message: `Đơn hàng của bạn đã được thanh toán thành công. Đơn hàng của bạn sẽ được xử lý trong thời gian sớm nhất.`,
              icon: <IconPaymentSuccess />,
            });
          } else {
            return render({
              title: "Thanh toán thất bại",
              message: `Có lỗi trong quá trình xử lý, vui lòng kiểm tra lại hoặc liên hệ Shop để được hỗ trợ`,
              icon: <IconPaymentFail />,
            });
          }
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
      {paymentResult && (
        <div className="p-4">
          <Button fullWidth onClick={() => navigate("/", { replace: true })}>
            {paymentResult.resultCode === 1 ? "Hoàn tất" : "Đóng"}
          </Button>
        </div>
      )}
    </Page>
  );
};

export default CheckoutResultPage;
