import * as React from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          "proxima-thin": require("../../assets/fonts/proxima/ProximaNova-Thin.otf"),
          "proxima-regular": require("../../assets/fonts/proxima/ProximaNova-Regular.otf"),
          "proxima-bold": require("../../assets/fonts/proxima/ProximaNova-Bold.otf"),
          "proxima-black": require("../../assets/fonts/proxima/ProximaNova-Black.otf"),
          "proxima-alt-thin": require("../../assets/fonts/proxima/ProximaNova-AltThin.otf"),
          "proxima-alt-bold": require("../../assets/fonts/proxima/ProximaNova-AltBold.otf"),
          "proxima-extrabold": require("../../assets/fonts/proxima/ProximaNova-Extrabold.otf"),
          "proxima-alt-light": require("../../assets/fonts/proxima/ProximaNova-AltLight.otf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => setLoadingComplete(true), 3700);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
