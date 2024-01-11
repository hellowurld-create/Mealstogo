import React, { useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 const onSearch = (searchKeyword) => {
  setIsLoading(true);
  setKeyword(searchKeyword);
  
  };
  
  useEffect(() => {
    // Check if searchKeyword is empty and reset location to null
  if (!keyword.length) {
    setLocation(null);
    setIsLoading(false); // No need to keep loading state when the keyword is empty
    return;
  }

  locationRequest(keyword.toLowerCase())
    .then(locationTransform)
    .then((result) => {
      setIsLoading(false);
      setLocation(result);
      console.log(result);
    })
    .catch((err) => {
      setIsLoading(false);
      setError(err);
    });
  },[keyword])


  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};