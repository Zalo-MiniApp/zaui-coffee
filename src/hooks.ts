import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { useRecoilCallback } from "recoil";
import { paymentState } from "state";
import { matchStatusBarColor } from "utils/device";
import { CheckoutSDK, EventName, events } from "zmp-sdk";
import { useNavigate, useSnackbar } from "zmp-ui";

export function useMatchStatusTextColor(visible?: boolean) {
  const changedRef = useRef(false);
  useEffect(() => {
    if (changedRef.current) {
      matchStatusBarColor(visible ?? false);
    } else {
      changedRef.current = true;
    }
  }, [visible]);
}

const originalScreenHeight = window.innerHeight;

export function useVirtualKeyboardVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const detectKeyboardOpen = () => {
      setVisible(window.innerHeight + 160 < originalScreenHeight);
    };
    window.addEventListener("resize", detectKeyboardOpen);
    return () => {
      window.removeEventListener("resize", detectKeyboardOpen);
    };
  }, []);

  return visible;
}

export const useHandlePayment = () => {
  const navigate = useNavigate();
  useEffect(() => {
    events.on(EventName.OpenApp, (data) => {
      if (data?.path) {
        navigate(data?.path, {
          state: data,
        });
      }
    });

    events.on(EventName.OnDataCallback, (resp) => {
      const { appTransID, eventType } = resp;
      if (appTransID || eventType === "PAY_BY_CUSTOM_METHOD") {
        navigate("/result", {
          state: resp,
        });
      }
    });

    events.on(EventName.PaymentClose, (data = {}) => {
      const { zmpOrderId } = data;
      navigate("/result", {
        state: { data: { zmpOrderId } },
      });
    });
  }, []);
};

export function useToBeImplemented() {
  const snackbar = useSnackbar();
  return () =>
    snackbar.openSnackbar({
      type: "success",
      text: "Chức năng dành cho các bên tích hợp phát triển...",
    });
}

export function usePayment() {
  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const getPaymentMethod = useRecoilCallback(
    ({ snapshot }) =>
      () =>
        snapshot.getPromise(paymentState),
    []
  );

  return async (params: { amount: number; desc: string }) => {
    try {
      const method = await getPaymentMethod();
      if (method) {
        const { orderId } = await CheckoutSDK.purchase({
          ...params,
          method: method.method,
        });
        navigate("/result", {
          state: { orderId },
        });
      } else {
        snackbar.openSnackbar({
          type: "error",
          text: "Vui lòng chọn phương thức thanh toán.",
        });
      }
    } catch (error: any) {
      console.warn(error);
      if (error.code !== -201) {
        snackbar.openSnackbar({
          type: "error",
          text: "Đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng kiểm tra nội dung thông báo lỗi trong cửa sổ console.",
        });
      }
    }
  };
}
