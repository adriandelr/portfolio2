import { Platform, View, Text } from "react-native";
import React, { useEffect, useRef } from "react";

import LottieView from "lottie-react-native";
import Linker from "./components/Linker";

import { isInView } from "./hooks/useIsInView";

export function Preserve() {
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
    <View
      style={{ height: "auto", backgroundColor: "white", paddingBottom: 70 }}
    >
      <Text
        style={{
          color: "dimgrey",
          fontSize: Platform.OS === "web" ? 27 : 21,
          textAlign: "center",
          fontFamily: 'proxima-extrabold"',
          marginTop: Platform.OS === "web" ? 0 : 20,
          marginVertical: Platform.OS === "web" ? 0 : 20,
        }}
      >
        AND THAT IS IT
      </Text>

      <LottieView
        ref={linkRef}
        source={require("../assets/animated/link.json")}
        webStyle={{
          width: 333,
          height: 333,
          flex: 1,
          alignSelf: "center",
        }}
        loop={false}
      />

      <View
        ref={triggerRef}
        style={{
          width: "100%",
          flexDirection: "row",
          gap: 37,
          justifyContent: "center",
        }}
      >
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

      <Text
        style={{
          color: "dimgrey",
          fontSize: Platform.OS === "web" ? 27 : 21,
          textAlign: "center",
          fontFamily: 'proxima-extrabold"',
        }}
      >
        Let’s connect and create something awesome
      </Text>

      <Text
        style={{
          fontFamily: "proxima-alt-light",
          color: "grey",
          fontSize: 15,
          textAlign: "center",
        }}
      >
        Made with 🍵, 🤍, and a touch of alchemy © [2025]
      </Text>
    </View>
  );
}
