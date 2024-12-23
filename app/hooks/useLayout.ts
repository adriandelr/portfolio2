import { Dimensions } from "react-native";
import { useState, useEffect } from "react";

const windowWidth = Dimensions.get("window").width;

export const screenWidth = (): number => {
  const [width, setWidth] = useState(windowWidth);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setWidth(window.width);
    });
    return () => subscription?.remove();
  });

  return width;
};

export const isSmallScreen = (): boolean => {
  const breakpoint = 1024;
  return handleWindowChange(breakpoint);
};

export const isSmallerScreen = (): boolean => {
  const breakpoint = 420;
  return handleWindowChange(breakpoint);
};

const handleWindowChange = (breakpoint: number): boolean => {
  const [width, setWidth] = useState(windowWidth <= breakpoint);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setWidth(window.width <= breakpoint);
    });
    return () => subscription?.remove();
  });

  return width;
};
