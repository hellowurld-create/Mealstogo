import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { ResturantsScreen } from "../../features/resturants/screens/resturants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
      <RestaurantStack.Navigator
          headerMode="none"
          screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }}
      >
      <RestaurantStack.Screen
         component={ResturantsScreen} 
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={()=><Text>Restaurant Details</Text>} 
      />
    </RestaurantStack.Navigator>
  );
};
