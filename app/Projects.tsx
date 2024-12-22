import { StyleSheet, Dimensions, View, Text, Image } from "react-native";
import * as React from "react";

import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { PROJECTS } from "./constants/Projects";
import { isSmallScreen, isSmallerScreen } from "./hooks/useLayout";
import Platform from "../app/utils/Platform";

const getMaxWidth = () => {
  let width = Dimensions.get("window").width;
  if (width > 737) width = 737;
  return width;
};

export default function Projects() {
  const styles = setStyles(isSmallScreen(), isSmallerScreen());

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textShowcase}>SHOWCASE</Text>

      {PROJECTS.map((project: any, i: number) => (
        <View key={i} style={styles.viewCarousel}>
          <Carousel
            ref={ref}
            width={getMaxWidth()}
            height={getMaxWidth() / 2}
            data={project.images}
            onProgressChange={progress}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: Platform.isWeb ? 0.7 : 0.8,
              parallaxScrollingOffset: Platform.isWeb ? 100 : 57,
              parallaxAdjacentItemScale: Platform.isWeb ? 0.8 : 0.8,
            }}
            renderItem={({ index }) => (
              <View style={styles.carousel}>
                <Image
                  style={styles.carouselImage}
                  source={project.images[index]}
                  resizeMode="contain"
                />
              </View>
            )}
          />
        </View>
      ))}
    </View>
  );
}

const setStyles = (isSmallScreen: boolean, isSmallerScreen: boolean) =>
  StyleSheet.create({
    container: {
      height: "auto",
      backgroundColor: "whitesmoke",
      alignItems: "center",
      paddingBottom: Platform.isWeb ? 35 : 0,
    },
    textShowcase: {
      color: "dimgrey",
      fontSize: Platform.isWeb && !isSmallerScreen ? 27 : 23,
      textAlign: "center",
      fontFamily: 'proxima-extrabold"',
      marginTop: Platform.isWeb ? 30 : 20,
      marginVertical: Platform.isWeb ? 10 : 20,
    },
    viewCarousel: {
      position: "relative",
      marginBottom: Platform.isWeb ? (isSmallScreen ? 45 : 0) : 90,
    },
    carousel: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: Platform.isWeb ? "transparent" : "lightgrey",
      borderWidth: Platform.isWeb ? 1 : 0,
      borderColor: "lightgrey",
      borderRadius: 3,
      width: "100%",
      shadowColor: "dimgrey",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 4,
    },
    carouselImage: {
      alignSelf: "center",
      flex: 1,
      transform: [{ scale: Platform.isWeb ? 1 : 1.57 }],
      width: Platform.isWeb ? "100%" : "57%",
      backgroundColor: Platform.isWeb ? "transparent" : "#101111",
    },
  });
