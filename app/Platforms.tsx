import { StyleSheet, Platform, View, Text } from "react-native";
import React from "react";

import QRCode from "react-qr-code";

import Layout from "./constants/Layout";
import Linker from "./components/Linker";
import { expoAppStoreURL, expoPlayStoreURL, expoURL } from "./constants/Expo";

export default function Platforms() {
  return (
    <View style={styles.container}>
      {Platform.OS === "web" && (
        <View style={styles.innerContainer}>
          <Text style={styles.textNative}>A MORE NATIVE EXPERIENCE</Text>

          <Text style={styles.textWebview}>
            {
              "You are running on web view. For an awesome in-app experience, \n \n download the Expo app by tapping one of the platforms below:"
            }
          </Text>

          <View style={styles.viewIcons}>
            <Linker url={expoAppStoreURL} iconOnly="app-store" textSize={57} />
            <Linker
              url={expoPlayStoreURL}
              iconOnly="google-play"
              textSize={57}
            />
          </View>

          <Text style={styles.textExpoInstalled}>
            {"When Expo is installed, you may open this app through the link,"}
          </Text>
          <Linker
            url={expoURL}
            text="Portfolio App"
            color={"whitesmoke"}
            bgColor={"dimgrey"}
            borderColor={"lightgrey"}
            confirmText="Are you sure you have installed the Expo app?"
            cancelText="Please download the Expo app."
          />

          <Text style={styles.textScanCode}>{"or scan the code:"}</Text>
          <View style={styles.viewQRCode}>
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
  innerContainer: { width: "100%", alignItems: "center" },
  textNative: {
    color: "dimgrey",
    fontSize: Platform.OS === "web" ? 27 : 21,
    textAlign: "center",
    fontFamily: 'proxima-extrabold"',
    marginTop: Platform.OS === "web" ? 50 : 20,
    marginVertical: Platform.OS === "web" ? 0 : 20,
  },
  textWebview: {
    fontFamily: "proxima-regular",
    maxWidth: Layout.isSmallDevice ? "100%" : "35.7%",
    color: "dimgrey",
    fontSize: Platform.OS === "web" ? 14 : 15,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  viewIcons: {
    flex: 0,
    flexBasis: "13%",
    flexWrap: "wrap",
    gap: 37,
  },
  textExpoInstalled: {
    fontFamily: "proxima-regular",
    maxWidth: Layout.isSmallDevice ? "100%" : 530,
    color: "dimgrey",
    fontSize: Platform.OS === "web" ? 14 : 15,
    marginTop: 30,
    marginBottom: 20,
  },
  textScanCode: {
    fontFamily: "proxima-regular",
    maxWidth: Layout.isSmallDevice ? "100%" : 530,
    color: "dimgrey",
    fontSize: Platform.OS === "web" ? 14 : 15,
    marginTop: 15,
    marginBottom: 10,
  },
  viewQRCode: {
    marginTop: 21,
  },
});
