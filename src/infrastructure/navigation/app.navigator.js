import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ size, color }) => (
    <Ionicons
      name={TAB_ICON[route.name]}
      size={size ? 24 : 23}
      color={color}
      style={{ marginBottom: -3 }}
    />
  ),
});

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: '#FEB500',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#000', 
          borderTopWidth: 1, 
          borderTopColor: '#ccc',
        },
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
