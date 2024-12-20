import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "./constants/Layout";
import Linker from "./components/Linker";
import QRCode from "react-qr-code";

export default function Platforms() {
  const expoAppStoreURL =
      "https://apps.apple.com/ph/app/expo-client/id982107779",
    expoPlayStoreURL =
      "https://play.google.com/store/apps/details?id=host.exp.exponent",
    expoURL =
      "exp://u.expo.dev/b6005ca1-f261-4b9d-8b27-918a03477a19/group/270669a8-118a-459e-9341-c303e06be6b4";

  return (
    <View style={styles.container}>
      {Platform.OS === "web" && (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text
            style={{
              color: "dimgrey",
              fontSize: Platform.OS === "web" ? 27 : 21,
              textAlign: "center",
              fontFamily: 'proxima-extrabold"',
              marginTop: Platform.OS === "web" ? 50 : 20,
              marginVertical: Platform.OS === "web" ? 0 : 20,
            }}
          >
            A MORE NATIVE EXPERIENCE...
          </Text>

          <Text
            style={{
              fontFamily: "proxima-regular",
              maxWidth: Layout.isSmallDevice ? "100%" : "35.7%",
              color: "dimgrey",
              fontSize: Platform.OS === "web" ? 14 : 15,
              textAlign: "center",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            {
              "You are running on web view. For an awesome in-app experience, \n \n download the Expo app by tapping one of the platforms below:"
            }
          </Text>

          <View
            style={{
              flex: 0,
              flexBasis: "13%",
              flexWrap: "wrap",
              gap: 37,
            }}
          >
            <Linker url={expoAppStoreURL} iconOnly="app-store" textSize={57} />
            <Linker
              url={expoPlayStoreURL}
              iconOnly="google-play"
              textSize={57}
            />
          </View>

          <Text
            style={{
              fontFamily: "proxima-regular",
              maxWidth: Layout.isSmallDevice ? "100%" : 530,
              color: "dimgrey",
              fontSize: Platform.OS === "web" ? 14 : 15,
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            {"After Expo is installed, you may open this app through the link,"}
          </Text>
          <Linker
            url={expoURL}
            text="Portfolio App"
            color={"whitesmoke"}
            bgColor={"dimgrey"}
            borderColor={"lightgrey"}
            confirmText="Are you sure you have installed the Expo client?"
            cancelText="Please download the Expo client."
          />

          <Text
            style={{
              fontFamily: "proxima-regular",
              maxWidth: Layout.isSmallDevice ? "100%" : 530,
              color: "dimgrey",
              fontSize: Platform.OS === "web" ? 14 : 15,
              marginTop: 15,
              marginBottom: 10,
            }}
          >
            {"or scan the code:"}
          </Text>
          <View
            style={{
              marginTop: 21,
            }}
          >
            <QRCode
              value={expoURL}
              size={137}
              bgColor={"whitesmoke"}
              fgColor={"dimgrey"}
              level="M"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
