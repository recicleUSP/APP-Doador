import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./auth";
import { useAuth } from "../contexts";
import { HomeNavigator } from "./home";

export default function Routes() {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      {signed ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
