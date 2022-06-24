import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { extendTheme, NativeBaseProvider } from "native-base";

import Routes from "./src/routes";
import { AuthProvider, CommonProvider } from "./src/contexts";
import useCachedResources from "./src/hooks/useCachedResources";
import { DevAlert } from "./src/components/common";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#EBF4F6",
        100: "#def1f1",
        200: "#bde4e3",
        300: "#9bd6d6",
        400: "#7bc9c8",
        500: "#5ABCBB",
        600: "#42a4a3",
        700: "#389A99",
        800: "#389A99",
        900: "#389A99",
      },
    },
  });

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  if (!isLoadingComplete) return null;
  else
    return (
      <NativeBaseProvider config={config} theme={theme}>
        <CommonProvider>
          <AuthProvider>
            <Routes />
            <DevAlert />
            <StatusBar style="auto" />
          </AuthProvider>
        </CommonProvider>
      </NativeBaseProvider>
    );
}
