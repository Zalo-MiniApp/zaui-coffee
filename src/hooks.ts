import { useEffect, useState } from "react";
import { matchStatusBarColor } from "utils/device";

export function useMatchStatusTextColor(visible?: boolean) {
  useEffect(() => {
    matchStatusBarColor(visible ?? false);
  }, [visible]);
};

const originalScreenHeight = window.innerHeight;

export function useVirtualKeyboardVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const detectKeyboardOpen = () => {
      setVisible(window.innerHeight < originalScreenHeight);
    }
    window.addEventListener("resize", detectKeyboardOpen);
    return () => {
      window.removeEventListener("resize", detectKeyboardOpen);
    }
  }, [])

  return visible;
};
