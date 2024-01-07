import React, { createContext, useEffect, useMemo, useState } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(true);
                    setRestaurants(results)
                }).catch((err) => {
                    setIsLoading(true);
                    setError(err);
                });
        },2000)
    }

    useEffect(() => {
        retrieveRestaurants();
    },[])
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