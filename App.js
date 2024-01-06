import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ResturantsScreen } from './src/features/resturants/screens/resturants.screen';
import { theme } from './src/infrasturcture/Theme';

export default function App() {
  const Tab = createBottomTabNavigator();

  const ProfileScreen = () => <Text>Profile</Text>;
  const MapScreen = () => <Text>Map</Text>;
  const WishScreen = () => <Text>Wishlist</Text>;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              let iconName;

              if (route.name === 'Restaurants') {
                iconName = focused ? 'restaurant' : 'restaurant-outline';
              } else if (route.name === 'Map') {
                iconName = focused ? 'map' : 'map-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return (
                <Ionicons
                  name={iconName}
                  size={focused ? 32 : 28} // Adjust the icon size
                  color={focused ? '#FEB500' : 'gray'}
                  style={{ marginBottom: -3 }} // Adjust the icon position
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FEB500',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: '#000', // Add background color
              borderTopWidth: 1, // Optional: Add a border on top
              borderTopColor: '#ccc', // Optional: Border color
            },
          }}
        >
          <Tab.Screen name="Restaurants" component={ResturantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Favorites" component={WishScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
