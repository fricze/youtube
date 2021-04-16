import { useLayoutEffect } from "react";

export const useScrollToTop = (signal) =>
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [signal]);
