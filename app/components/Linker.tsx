import React, { useCallback } from "react";
import { Alert, Platform, View, Linking, TouchableOpacity } from "react-native";

import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Linker({
  url,
  text,
  textSize,
  color,
  bgColor,
  borderColor,
  confirmText,
  cancelText,
  iconOnly,
}: any) {
  const openLink = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      if (Platform.OS == "web") {
        window.open(url, "_blank");
      } else {
        await Linking.openURL(url);
      }
    } else {
      Alert.alert("Please make sure you have this application.");
    }
  }, [url]);

  return (
    <View>
      {!!iconOnly && (
        <TouchableOpacity
          onPress={() => {
            if (confirmText && cancelText) {
              if (confirm(confirmText)) {
                openLink();
              } else {
                alert(cancelText);
              }
            } else {
              openLink();
            }
          }}
        >
          <Icon
            name={iconOnly}
            size={textSize || 24}
            color={color || "dimgrey"}
            style={{
              alignSelf: "center",
              justifyContent: "flex-end",
              paddingVertical: 13,
            }}
          />
        </TouchableOpacity>
      )}
      {!iconOnly && (
        <View
          style={{
            width: 170,
            height: 37,
            marginTop: 3,
            marginBottom: 7,
          }}
        >
          <Button
            onPress={() => {
              if (confirmText && cancelText) {
                if (confirm(confirmText)) {
                  openLink();
                } else {
                  alert(cancelText);
                }
              } else {
                openLink();
              }
            }}
            titleStyle={{
              fontSize: textSize || 13,
              color: color || "#101111",
              fontWeight: Platform.OS === "web" ? "normal" : "300",
            }}
            buttonStyle={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: bgColor || "lightslategrey",
              borderWidth: 2,
              borderColor: borderColor || "slategray",
              borderRadius: 1,
            }}
            title={text}
            type="solid"
          />
        </View>
      )}
    </View>
  );
}
