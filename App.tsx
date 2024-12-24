import { StyleSheet } from "react-native";
import React, { FunctionComponent, useState, useRef } from "react";
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
import {
  IOScrollView,
  IOScrollViewController,
} from "react-native-intersection-observer";

import {
  screenWidth,
  isStandardScreen,
  isSmallScreen,
} from "./app/hooks/useLayout";
import useCachedResources from "./app/hooks/useCachedResources";
import AnimatedSplashScreen from "./app/AnimatedSplashScreen";
import Present from "./app/Present";
import Projects from "./app/Projects";
import Platforms from "./app/Platforms";
import Preserve from "./app/Preserve";
import Platform from "./app/utils/Platform";

SplashScreen.hide();

const Portfolio: FunctionComponent = () => {
  const [animationCompleted, setAnimationComplete] = useState<Boolean>(false);
  const changeAnimationStatus = (param: Boolean) => setAnimationComplete(param);
  const isLoadingComplete = useCachedResources();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset.y;
  });

  const scrollViewRef = useRef<IOScrollViewController>(null);

  const IMG_HEIGHT = isStandardScreen() ? (isSmallScreen() ? 200 : 300) : 370;
  const styles = setStyles(screenWidth(), IMG_HEIGHT);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * (Platform.isWeb ? 0.97 : 0.51)]
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

  const contentTemplate = () => (
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
  );

  return !animationCompleted && !isLoadingComplete ? (
    <AnimatedSplashScreen onFinish={changeAnimationStatus} />
  ) : (
    <GestureHandlerRootView style={styles.gestureView}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {Platform.isWeb && contentTemplate.call(this)}
          {(Platform.isAndroid || Platform.isIOS) && (
            <IOScrollView ref={scrollViewRef}>
              {contentTemplate.call(this)}
            </IOScrollView>
          )}
          <StatusBar style="light" backgroundColor="black" />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
export default Portfolio;

const setStyles = (width: number, IMG_HEIGHT: number) =>
  StyleSheet.create({
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
