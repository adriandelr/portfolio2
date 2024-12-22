import { Platform, View } from "react-native";
import React from "react";

import { Avatar, Text } from "@rneui/themed";

export default function Present() {
  return (
    <View style={{ height: "auto", backgroundColor: "white" }}>
      <Avatar
        size={230}
        rounded
        source={require("../assets/images/imresizer-ADR-300x300_enhanced.png")}
        containerStyle={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 30,
        }}
        avatarStyle={{
          width: null,
          height: null,
          flex: 1,
          resizeMode: "contain",
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Text
          style={{
            maxWidth: Platform.OS === "web" ? "35.7%" : "83%",
            fontFamily: "proxima-regular",
            color: "grey",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Adrian is a web developer focused on developing Cross-Platform
          applications using Front-End technologies. He has been delivering
          various solutions, ranging from UI and animation to computation,
          communication, and modularity of client-side data and content for the
          past nine (9) years.
          {"\n"}
          {"\n"}
          Recently, he handled projects as a UI Hybrid Mobile Developer for a
          US-based client Tollway group, and supported Accenture's Business
          Development for a Hong Kong-based Housing provider. He facilitated a
          two-day boot camp course on a web framework for onboarding recruits.
          {"\n"}
          {"\n"}
          Furthermore, he has developed Hybrid mobile applications for HMC's
          world-class loyalty solutions. Providing services to luxury five-star
          hotels, and brands.
        </Text>
      </View>
    </View>
  );
}
