import {
  StyleSheet,
  Platform,
  Dimensions,
  View,
  Text,
  Image,
} from "react-native";
import * as React from "react";

import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { PROJECTS } from "./constants/Projects";
import { isPlatformWeb } from "./utils/Platform";

const getMaxWidth = () => {
  let width = Dimensions.get("window").width;
  if (width > 737) width = 737;
  return width;
};

export default function Projects() {
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
              parallaxScrollingScale: isPlatformWeb() ? 0.7 : 0.8,
              parallaxScrollingOffset: isPlatformWeb() ? 100 : 57,
              parallaxAdjacentItemScale: isPlatformWeb() ? 0.8 : 0.8,
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

const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: "whitesmoke",
    alignItems: "center",
    paddingBottom: isPlatformWeb() ? 35 : 45,
  },
  textShowcase: {
    color: "dimgrey",
    fontSize: isPlatformWeb() ? 27 : 21,
    textAlign: "center",
    fontFamily: 'proxima-extrabold"',
    marginTop: isPlatformWeb() ? 50 : 20,
    marginVertical: isPlatformWeb() ? 0 : 20,
  },
  viewCarousel: {
    position: "relative",
    marginBottom: isPlatformWeb() ? 0 : 90,
  },
  carousel: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: isPlatformWeb() ? "transparent" : "lightgrey",
    borderWidth: isPlatformWeb() ? 1 : 0,
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
    transform: [{ scale: isPlatformWeb() ? 1 : 1.57 }],
    width: isPlatformWeb() ? "100%" : "57%",
    backgroundColor: isPlatformWeb() ? "transparent" : "#101111",
  },
});
