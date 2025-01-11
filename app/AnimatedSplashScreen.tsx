import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";

import LottieView from "lottie-react-native";
import { isSmallScreen } from "./hooks/useLayout";

interface Props {
  onFinish: (param: Boolean) => void;
}

const AnimatedSplashScreen: FunctionComponent<Props> = ({ onFinish }) => {
  return (
    <LottieView
      source={require("../assets/animated/wfh.json")}
      style={[styles.centered, styles.centeredDevice]}
      webStyle={styles.centered}
      speed={isSmallScreen() ? 0.25 : 0.5}
      autoPlay
      loop={true}
      onAnimationFinish={() => onFinish(true)}
    />
  );
};
export default AnimatedSplashScreen;

const styles = StyleSheet.create({
  centered: {
    width: 370,
    height: 370,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  centeredDevice: {
    width: "77%",
    height: "77%",
  },
});
