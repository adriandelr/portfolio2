import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { Avatar } from "@rneui/themed";
import Animated, { FadeIn } from "react-native-reanimated";

import { isSmallScreen } from "./hooks/useLayout";

export default function Present() {
  const styles = setStyles(isSmallScreen());
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn}>
        <Avatar
          size={230}
          rounded
          source={require("../assets/images/imresizer-ADR-300x300_enhanced.png")}
          containerStyle={styles.containerStyle}
          avatarStyle={styles.avatarStyle}
        />
      </Animated.View>

      <View style={styles.viewProfileText}>
        <Text style={styles.textProfile}>
          Adrian is a web developer focused on developing Cross-Platform
          applications using Front-End technologies. He has been delivering
          various solutions, ranging from UI and animation to communication,
          computation, and management of client-side data and content for the
          past nine (9) years.
          {"\n"}
          {"\n"}
          Furthermore, he handled projects as a UI Hybrid Mobile Developer for a
          US-based Tollway group and supported Accenture's Business Development
          for a Housing provider based in Hong Kong. He then facilitated a
          two-day boot camp on a web framework to onboard recruits.
          {"\n"}
          {"\n"}
          Recently, he worked on applications for HMC's premium loyalty
          solutions that serve luxury five-star hotels and developed complex
          entry pages for a Mexican airline booking engine.
        </Text>
      </View>
    </View>
  );
}

const setStyles = (isSmallScreen: boolean) =>
  StyleSheet.create({
    container: {
      height: "auto",
      backgroundColor: "white",
    },
    containerStyle: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: isSmallScreen ? 40 : 30,
    },
    avatarStyle: {
      width: null,
      height: null,
      flex: 1,
      resizeMode: "contain",
    },
    viewProfileText: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: isSmallScreen ? 40 : 30,
    },
    textProfile: {
      maxWidth: isSmallScreen ? "69%" : "31%",
      fontFamily: "proxima-regular",
      color: "grey",
      fontSize: 15,
      textAlign: "center",
    },
  });
