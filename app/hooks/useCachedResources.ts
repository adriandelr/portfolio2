import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "proxima-regular": require("../../assets/fonts/proxima/ProximaNova-Regular.otf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setTimeout(() => setLoadingComplete(true), 3700);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
