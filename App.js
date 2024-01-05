import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ResturantsScreen } from './src/features/resturants/screens/resturants.screen';
import { theme } from './src/infrasturcture/Theme';

import {
  Montserrat_700Bold,
  useFonts as useMontserrat,
} from '@expo-google-fonts/montserrat';

import {
  OpenSans_400Regular,
  useFonts as useOpenSans,
} from '@expo-google-fonts/open-sans';

export default function YourComponent() {

  const [montserratLoaded] = useMontserrat({
     Montserrat_700Bold,
  })
  const [OpenSansLoaded] = useOpenSans({
    OpenSans_400Regular,
  })

  if (!montserratLoaded || !OpenSansLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <ResturantsScreen />
    </ThemeProvider>
      </>
  );
}

