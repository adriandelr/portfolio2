import { Platform } from "react-native";

const platform = Platform.OS;

export default {
  isWeb: platform === "web",
  isAndroid: platform === "android",
  isIOS: platform === "ios",
};
