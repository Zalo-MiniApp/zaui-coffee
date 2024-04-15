import React, { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Box, Header, Page, Text } from "zmp-ui";
import subscriptionDecor from "static/subscription-decor.svg";
import {
  AsyncCallbackFailObject,
  CheckTransactionReturns,
  Payment,
} from "zmp-sdk";
import { useLocation } from "react-router";

interface RenderResultProps {
  title: string;
  message: string;
  color: string;
}

const CheckoutResultPage: FC = () => {
  const { state } = useLocation();
  const [paymentResult, setPaymentResult] = useState<
    CheckTransactionReturns | AsyncCallbackFailObject
  >();

  useEffect(() => {
    let timeout;

    const check = () => {
      Payment.checkTransaction({
        data: "path" in state ? state.path : state?.data,
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

  useEffect(() => {
    console.log({ paymentResult, state });
  }, [paymentResult]);

  if (paymentResult) {
    return (
      <Page className="flex flex-col">
        <Header title="Kết quả thanh toán" />
        {(function (render: (result: RenderResultProps) => ReactNode) {
          if ("resultCode" in paymentResult) {
            if (paymentResult.resultCode === 1) {
              return render({
                title: "Thanh toán thành công",
                message: `Cảm ơn bạn đã mua hàng!`,
                color: "#288F4E",
              });
            }
            if (paymentResult.resultCode === 0) {
              return render({
                title: "Thanh toán đang được xử lý",
                message: `Nhà bán hàng đã nhận được yêu cầu thanh toán của bạn và đang xử lý. Mã giao dịch: ${(paymentResult as CheckTransactionReturns).orderId}-${(paymentResult as CheckTransactionReturns).transId}`,
                color: "#F4AA39",
              });
            }
          }
          return render({
            title: "Thanh toán thất bại",
            message: `Đã có lỗi xảy ra trong quá trình thanh toán, vui lòng thử lại sau! Mã lỗi: ${JSON.stringify((paymentResult as AsyncCallbackFailObject).code)}`,
            color: "#DC1F18",
          });
        })(({ title, message, color }: RenderResultProps) => (
          <Box className="p-4 space-y-4 flex-1 flex flex-col justify-center items-center text-center">
            <div
              key={+new Date()}
              className="w-28 h-28 flex items-center justify-center rounded-full animate-spin"
              style={{
                backgroundColor: color,
                animationIterationCount: 1,
              }}
            >
              <img src={subscriptionDecor} />
            </div>
            <Text.Title className="font-bold" style={{ color }}>
              {title}
            </Text.Title>
            <Text>{message}</Text>
          </Box>
        ))}
      </Page>
    );
  }

  return <></>;
};

export default CheckoutResultPage;
