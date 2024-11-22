import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import React, { FunctionComponent, useState } from "react";
import AnimatedSplashScreen from "./app/AnimatedSplashScreen";

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import useCachedResources from "./app/hooks/useCachedResources";

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
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return !animationCompleted && !isLoadingComplete ? (
    <AnimatedSplashScreen onFinish={changeAnimationStatus} />
  ) : (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          onScroll={scrollHandler}
          scrollEventThrottle={17}
        >
          {/* Top Parallax Image */}
          <Animated.Image
            source={require("./assets/images/logos/logo-pp.png")}
            style={[styles.image, imageAnimatedStyle]}
          />

          {/* Parallax Content */}
          <View style={{ height: 700, backgroundColor: "whitesmoke" }}>
            <Text
              style={{
                color: "slategrey",
                fontSize: 17,
                fontWeight: "300",
                textAlign: "center",
                fontFamily: "proxima-regular",
              }}
            >
              Cross-Platform Digital Portfolio
            </Text>
          </View>
        </Animated.ScrollView>
        <StatusBar style="light" backgroundColor="black" />
      </SafeAreaView>
    </SafeAreaProvider>
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
