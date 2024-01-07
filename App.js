import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ResturantsScreen } from './src/features/resturants/screens/resturants.screen';
import { theme } from './src/infrasturcture/Theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts as useMontserrat,
  useFonts as useMontserratR,
} from '@expo-google-fonts/montserrat';

import {
  OpenSans_400Regular,
  useFonts as useOpenSans,
} from '@expo-google-fonts/open-sans';

export default function App() {
 const [montserratLoaded] = useMontserrat({
     Montserrat_700Bold,
  })
  const [montserratRLoaded] = useMontserratR({
     Montserrat_400Regular,
  })
  const [OpenSansLoaded] = useOpenSans({
    OpenSans_400Regular,
  })

  if (!montserratLoaded || !OpenSansLoaded || !montserratRLoaded) {
    return null;
  }

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
    <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
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
          <Tab.Screen name="Restaurants" component={ResturantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Favorites" component={WishScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        </NavigationContainer>
        </RestaurantsContextProvider>
    </ThemeProvider>
  );
}
