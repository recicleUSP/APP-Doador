import * as React from "react";
import * as Font from "expo-font";
import { LogBox } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import {
  Montserrat_700Bold,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldSetBadge: false,
    shouldShowAlert: true,
    shouldPlaySound: false,
  }),
});

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    LogBox.ignoreLogs([
      "Setting a timer for a long period of",
      "Require cycle",
    ]);

    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...FontAwesome.font,
          "Montserrat-Bold": Montserrat_700Bold,
          "Montserrat-Light": Montserrat_300Light,
          "Montserrat-Regular": Montserrat_400Regular,
          "Montserrat-Semibold": Montserrat_600SemiBold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
