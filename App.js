import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrasturcture/Theme';
import { AppNavigator } from './src/infrasturcture/navigation/app.navigator';
import { LocationContextProvider } from './src/services/location/location.context';
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

 
  return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
      <RestaurantsContextProvider>
      <AppNavigator/>
        </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      </>
  );
}
