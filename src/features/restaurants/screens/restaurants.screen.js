import React, { useContext, useState } from 'react';
import { FlatList, Platform, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import styled from 'styled-components/native';
import Search from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';


const RestaurantContainer = styled(SafeAreaView)`
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  flex: 1;
  
`;

const HeaderContainer = styled(View)`
  padding: 16px;
  align-items: left;
`;
const WelcomeText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.secondary};
  margin-top: 5px;
`;

const Subheading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 10px;
`;


const UserInfo = styled(View)`
    flex-direction: row;
    align-items: center;
`
const RestaurantList = styled(FlatList)`
  padding: 16px;
  flex: 1;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left:-25%;
`


export const RestaurantsScreen = ({navigation}) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
       {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color='#000' />
        </LoadingContainer>
      )}
      <RestaurantContainer>
        <HeaderContainer>
          <WelcomeText>Good Day,</WelcomeText>
          <UserInfo style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Subheading>John Doe</Subheading>
          </UserInfo>
        </HeaderContainer>
        <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
           keyExtractor={(item) => item.name}
        />
      </RestaurantContainer>
    </>
  );
};
