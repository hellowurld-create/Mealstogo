import React, { createContext, useContext, useEffect, useState } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.services";

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setError(null);
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch((err) => {
        setRestaurants([]);
        setIsLoading(false);
        setError(err);
      });
  };

useEffect(() => {
    // Check if location is available and has lat property
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    } else {
      // Handle the case when location or location.lat is null
      setError("Location information is not available.");
    }
  }, [location]); // Include location in the dependency array to trigger the effect on location changes

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

