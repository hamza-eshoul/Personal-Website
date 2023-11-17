import { useEffect, useState } from "react";

export const useDelayMobileNavUnmounting = () => {
  const [mobileMenuMount, setMobileMenuMount] = useState("unmounted");

  const show = () => {
    if (mobileMenuMount === "unmounting") {
      return;
    }

    setMobileMenuMount("mounting");
  };

  const hide = () => {
    if (mobileMenuMount === "mounting") {
      return;
    }
    setMobileMenuMount("unmounting");
  };

  useEffect(() => {
    let timeoutId;

    if (mobileMenuMount === "unmounting") {
      timeoutId = setTimeout(() => {
        setMobileMenuMount("unmounted");
      }, 390);
    } else if (mobileMenuMount === "mounting") {
      timeoutId = setTimeout(() => {
        setMobileMenuMount("mounted");
      }, 390);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [mobileMenuMount]);

  return [mobileMenuMount, show, hide];
};
