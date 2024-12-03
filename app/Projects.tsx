import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import * as React from "react";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

const projData = [
  require("../assets/images/projects/proj-acn.png"),
  require("../assets/images/projects/proj-acn-1.png"),
  require("../assets/images/projects/proj-acn-3.png"),
];

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
      <Text
        style={{
          color: "dimgrey",
          fontSize: 21,
          textAlign: "center",
          fontFamily: 'proxima-extrabold"',
          marginVertical: 20,
        }}
      >
        SHOWCASE
      </Text>

      <Carousel
        ref={ref}
        width={getMaxWidth()}
        height={getMaxWidth() / 2}
        data={projData}
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: Platform.OS === "web" ? 0.7 : 0.8,
          parallaxScrollingOffset: Platform.OS === "web" ? 100 : 57,
          parallaxAdjacentItemScale: Platform.OS === "web" ? 0.8 : 0.8,
        }}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor:
                Platform.OS === "web" ? "transparent" : "lightgrey",
              borderWidth: Platform.OS === "web" ? 1 : 0,
              borderColor: "lightgrey",
              borderRadius: 3,
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                flex: 1,
                transform: [{ scale: Platform.OS === "web" ? 1 : 1.57 }],
                width: Platform.OS === "web" ? "100%" : "57%",
                backgroundColor:
                  Platform.OS === "web" ? "transparent" : "#101111",
              }}
              source={projData[index]}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 700,
    backgroundColor: "whitesmoke",
    flex: 1,
    alignItems: "center",
  },
});
