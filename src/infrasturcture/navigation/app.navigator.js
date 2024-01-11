import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import {RestaurantsNavigator} from './restaurants.navigator'

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Favorites: 'md-heart',
    Profile: 'md-person',
  };

  const ProfileScreen = () => <Text>Profile</Text>;
  const MapScreen = () => <Text>Map</Text>;
  const WishScreen = () => <Text>Wishlist</Text>;

  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons
        name={TAB_ICON[route.name]}
        size={size ? 32 : 28}
        color={color}
        style={{ marginBottom: -3 }}
      />
    ),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
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
        <Tab.Screen name="Favorites" component={WishScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
