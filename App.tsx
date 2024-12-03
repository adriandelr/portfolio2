import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Platform, Dimensions, StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent, useState } from "react";

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useCachedResources from "./app/hooks/useCachedResources";

import AnimatedSplashScreen from "./app/AnimatedSplashScreen";
import Profile from "./app/Profile";
import Projects from "./app/Projects";

SplashScreen.hide();

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const Portfolio: FunctionComponent = () => {
  const [animationCompleted, setAnimationComplete] = useState<Boolean>(false);
  const changeAnimationStatus = (param: Boolean) => setAnimationComplete(param);
  const isLoadingComplete = useCachedResources();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset.y;
  });

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [
              -IMG_HEIGHT / 2,
              0,
              IMG_HEIGHT * (Platform.OS === "web" ? 0.97 : 0.51),
            ]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [3, 0.73, 1]
          ),
        },
      ],
    };
  });

  return !animationCompleted && !isLoadingComplete ? (
    <AnimatedSplashScreen onFinish={changeAnimationStatus} />
  ) : (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Animated.ScrollView
            ref={scrollRef}
            onScroll={scrollHandler}
            scrollEventThrottle={17}
          >
            {/* Top Parallax Image */}
            <Animated.Image
              source={require("./assets/images/icon.png")}
              style={[styles.image, imageAnimatedStyle]}
            />

            {/* Parallax Content */}
            <Profile />
            <Projects />
          </Animated.ScrollView>
          <StatusBar style="light" backgroundColor="black" />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
});
