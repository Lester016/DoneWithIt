import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Screen>
  );
}
