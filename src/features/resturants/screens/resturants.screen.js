import React, { useContext } from 'react';
import { FlatList, Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import styled from 'styled-components/native';
import Search from '../../../components/Search';
import { Spacer } from '../../../components/spacer/spacer.components';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { RestaurantInfoCard } from '../components/resturants-InfoCard.components';


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
  margin-top: 5px 
`;

const Subheading = styled(Text)`
  
   font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
  flex-wrap: wrap;
  margin-top: 5px
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




export const ResturantsScreen = () => {
  // const restaurantData = [
  //   { name: 'Restaurant 1' },
  //   { name: 'Restaurant 2' },
  //   { name: 'Restaurant 3' },
  //   { name: 'Restaurant 4' },
  // ];
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  
 
  return (
    <>
      {isLoading && (
        <LoadingContainer >
          <Loading
            size={50}
            animating={true}
            color='#000'
          />
        </LoadingContainer>
        )
      }
      <RestaurantContainer>
        <HeaderContainer>
          <WelcomeText>Good Day,</WelcomeText>
          <UserInfo style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Subheading>John Doe</Subheading>
          </UserInfo>
        </HeaderContainer>
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            console.log(item)
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard  restaurant={item}/>
              </Spacer>
            )
          }}
           keyExtractor={(item) => item.name}
        />
      </RestaurantContainer>
    </>
  );
};
