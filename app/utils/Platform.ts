import { Platform } from "react-native";

export const isPlatformWeb = (): boolean => Platform.OS === "web";
export const isPlatformAndroid = (): boolean => Platform.OS === "android";
export const isPlatformIOS = (): boolean => Platform.OS === "ios";
