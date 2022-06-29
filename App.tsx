import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

import Routes from "./src/routes";
import { DevAlert } from "./src/components/common";
import { AuthProvider, CommonProvider } from "./src/contexts";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  if (!isLoadingComplete) return null;
  else
    return (
      <NativeBaseProvider config={config}>
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
