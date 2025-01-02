import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { A } from "@expo/html-elements";

import LottieView from "lottie-react-native";
import { InView } from "react-native-intersection-observer";

import Linker from "./components/Linker";
import { isSmallScreen, isSmallerScreen } from "./hooks/useLayout";
import Platform from "../app/utils/Platform";
import { isInView } from "./hooks/useIsInView";
import { expoDevURL } from "./constants/Expo";

export default function Preserve() {
  const styles = setStyles(isSmallScreen(), isSmallerScreen());
  const triggerRef = React.useRef(null);
  const linkRef = useRef<LottieView | null>(null);
  const isVisible = Platform.isWeb && isInView(triggerRef, "0px", true);

  useEffect(() => {
    if (isVisible) playLink();
  }, [isVisible]);

  const playLink = () => {
    setTimeout(() => {
      linkRef.current?.play();
    }, 300);
  };

  const iconsTemplate = () => (
    <View ref={triggerRef} style={styles.viewIcons}>
      <Linker
        url={"mailto:adrian.delr@gmail.com"}
        iconOnly="envelope"
        color={"dimgrey"}
      />
      <Linker
        url={"skype:adrian.delr?chat"}
        iconOnly="skype"
        color={"dimgrey"}
      />
      <Linker
        url={"viber://contact?number=%2B639760166007"}
        iconOnly="viber"
        color={"dimgrey"}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textAndThat}>AND THAT IS IT</Text>

      <LottieView
        ref={linkRef}
        source={require("../assets/animated/link.json")}
        style={[styles.lottieWebStyle, styles.lottieStyle]}
        webStyle={styles.lottieWebStyle}
        loop={false}
      />

      {Platform.isWeb && iconsTemplate.call(iconsTemplate)}
      {(Platform.isAndroid || Platform.isIOS) && (
        <InView
          ref={triggerRef}
          style={styles.viewIcons}
          triggerOnce={true}
          onChange={() => playLink()}
        >
          {iconsTemplate.call(iconsTemplate)}
        </InView>
      )}
      <Text style={styles.textConnect}>
        Let’s connect and create something awesome
      </Text>

      <Text style={styles.textMadeWith}>
        Made with{" "}
        <A href={expoDevURL} style={styles.textExpo} target="_blank">
          Expo
        </A>
        , 🍵, 🤍, and a touch of alchemy © [2025]
      </Text>
    </View>
  );
}

const setStyles = (isSmallScreen: boolean, isSmallerScreen: boolean) =>
  StyleSheet.create({
    container: { height: "auto", backgroundColor: "white", paddingBottom: 70 },
    textAndThat: {
      color: "dimgrey",
      fontSize: Platform.isWeb && !isSmallerScreen ? 27 : 23,
      textAlign: "center",
      fontFamily: 'proxima-extrabold"',
      marginTop: Platform.isWeb ? 0 : 40,
    },
    lottieWebStyle: {
      width: 333,
      height: 333,
      flex: 1,
      alignSelf: "center",
    },
    lottieStyle: {
      width: 173,
      height: 173,
    },
    viewIcons: {
      width: "100%",
      flexDirection: "row",
      gap: 37,
      justifyContent: "center",
    },
    textConnect: {
      color: "dimgrey",
      fontSize: isSmallScreen ? 17 : 27,
      textAlign: "center",
      fontFamily: 'proxima-extrabold"',
    },
    textMadeWith: {
      fontFamily: "proxima-alt-light",
      color: "grey",
      fontSize: isSmallScreen ? 13 : 15,
      textAlign: "center",
    },
    textExpo: {
      color: "dimgrey",
      fontFamily: "proxima-alt-thin",
    },
  });
