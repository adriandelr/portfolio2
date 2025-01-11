import { useWindowDimensions } from "react-native";

const breakpoints = {
  smaller: 420,
  small: 1024,
  standard: 1920,
};

export const screenWidth = (): number => {
  const { width } = useWindowDimensions();
  return width;
};

const handleScreenChange = (breakpoint: number): boolean => {
  const { width } = useWindowDimensions();
  return width <= breakpoint;
};

export const isSmallerScreen = (): boolean => {
  return handleScreenChange(breakpoints.smaller);
};

export const isSmallScreen = (): boolean => {
  return handleScreenChange(breakpoints.small);
};

export const isStandardScreen = (): boolean => {
  return handleScreenChange(breakpoints.standard);
};
