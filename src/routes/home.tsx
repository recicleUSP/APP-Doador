import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/tabs/Home";
import Colors from "../constants/Colors";
import Impact from "../screens/tabs/Impact";
import History from "../screens/tabs/History";
import Profile from "../screens/tabs/Profile";
import { RootStackParamList, RootTabParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
     {
      //<Stack.Screen name="Notification" component={BottomTabNavigator} />
     }
    
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary.regular,
        tabBarStyle: { height: 54, paddingBottom: 8 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "INÍCIO",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="recycle" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={History}
        options={{
          title: "COLETAS",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Impact"
        component={Impact}
        options={{
          title: "IMPACTO",
          tabBarIcon: ({ color }) => <TabBarIcon name="envira" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "PERFIL",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-alt" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return <FontAwesome5 size={20} style={{ marginBottom: -8 }} {...props} />;
}
