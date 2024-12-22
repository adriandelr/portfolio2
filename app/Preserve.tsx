import { StyleSheet, Platform, View, Text } from "react-native";
import React, { useEffect, useRef } from "react";

import LottieView from "lottie-react-native";

import Linker from "./components/Linker";
import { isPlatformWeb } from "./utils/Platform";
import { isInView } from "./hooks/useIsInView";

export default function Preserve() {
  const triggerRef = React.useRef(null);
  const linkRef = useRef<LottieView | null>(null);
  const isVisible = isInView(triggerRef, "0px", true);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        linkRef.current?.play();
      }, 300);
    }
  }, [isVisible]);

  return (
    <View style={styles.container}>
      <Text style={styles.textAndThat}>AND THAT IS IT</Text>

      <LottieView
        ref={linkRef}
        source={require("../assets/animated/link.json")}
        webStyle={styles.lottieWebStyle}
        loop={false}
      />

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

      <Text style={styles.textConnect}>
        Let’s connect and create something awesome
      </Text>

      <Text style={styles.textMadeWith}>
        Made with 🍵, 🤍, and a touch of alchemy © [2025]
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: "auto", backgroundColor: "white", paddingBottom: 70 },
  textAndThat: {
    color: "dimgrey",
    fontSize: isPlatformWeb() ? 27 : 21,
    textAlign: "center",
    fontFamily: 'proxima-extrabold"',
    marginTop: isPlatformWeb() ? 0 : 20,
    marginVertical: isPlatformWeb() ? 0 : 20,
  },
  lottieWebStyle: {
    width: 333,
    height: 333,
    flex: 1,
    alignSelf: "center",
  },
  viewIcons: {
    width: "100%",
    flexDirection: "row",
    gap: 37,
    justifyContent: "center",
  },
  textConnect: {
    color: "dimgrey",
    fontSize: isPlatformWeb() ? 27 : 21,
    textAlign: "center",
    fontFamily: 'proxima-extrabold"',
  },
  textMadeWith: {
    fontFamily: "proxima-alt-light",
    color: "grey",
    fontSize: 15,
    textAlign: "center",
  },
});
