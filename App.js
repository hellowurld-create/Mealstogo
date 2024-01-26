import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

import { initializeApp } from "firebase/app";

import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

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

const firebaseConfig = {
  apiKey: "AIzaSyD9RZtVzasNbml2tmvpAx6QfKIA3XhzYCA",
  authDomain: "flux-foods.firebaseapp.com",
  projectId: "flux-foods",
  storageBucket: "flux-foods.appspot.com",
  messagingSenderId: "810484710301",
  appId: "1:810484710301:web:b9fdcc89b8d0175b160d74"
};

// Initialize the Firebase app

initializeApp(firebaseConfig);

export default function App() {
 

  const [montserratLoaded] = useMontserrat({
    Montserrat_700Bold,
  });
  const [montserratRLoaded] = useMontserratR({
    Montserrat_400Regular,
  });
  const [OpenSansLoaded] = useOpenSans({
    OpenSans_400Regular,
  });

  if (!montserratLoaded || !OpenSansLoaded || !montserratRLoaded) {
    return null;
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
