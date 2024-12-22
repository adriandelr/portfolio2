import { Platform, Dimensions, StyleSheet } from "react-native";
import React, { FunctionComponent, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

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
import Present from "./app/Present";
import Projects from "./app/Projects";
import Platforms from "./app/Platforms";
import { Preserve } from "./app/Preserve";

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
    <GestureHandlerRootView style={styles.gestureView}>
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
            {/* Portfolio Profile */}
            <Present />

            {/* Projects Showcase */}
            <Projects />

            {/* Platform Specific */}
            <Platforms />

            {/* Preserve Relation */}
            <Preserve />
          </Animated.ScrollView>
          <StatusBar style="light" backgroundColor="black" />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
export default Portfolio;

const styles = StyleSheet.create({
  gestureView: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
});
