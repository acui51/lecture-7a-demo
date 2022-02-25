import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingOne from "./OnboardingOne";
import OnboardingTwo from "./OnboardingTwo";
import FirstHomeScreen from "./FirstHomeScreen";

const Stack = createStackNavigator();

const OnboardingAndHomeStack = () => {
  const [finishedOnboarding, setFinishedOnboarding] = useState(false);
  if (!finishedOnboarding) {
    // Onboarding Screens
    return (
      <Stack.Navigator>
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="OnboardingTwo">
          {(props) => (
            <OnboardingTwo
              {...props}
              setFinishedOnboarding={setFinishedOnboarding}
            />
          )}
        </Stack.Screen>

        {/* You also need to put your first actual home screen here */}
        <Stack.Screen name="FirstHomeScreen" component={FirstHomeScreen} />
      </Stack.Navigator>
    );
  }

  // Actual home screens
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstHomeScreen" component={FirstHomeScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingAndHomeStack;

const styles = StyleSheet.create({});
