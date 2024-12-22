import { Dimensions } from "react-native";

const width = Dimensions.get("window").width,
  height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  isSmallerDevice: width <= 280,
  isSmallerImage: width <= 420,
  isSmallDevice: width <= 768,
};
