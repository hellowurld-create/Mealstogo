import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import Search from '../../../components/Search';
import { RestaurantInfoCard } from '../components/resturants-InfoCard.components';

const RestaurantContainer = styled(SafeAreaView)`
 margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  flex: 1;
`

const ContentContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: ${(props) => props.theme.space.m};
`;

export const ResturantsScreen = () => {
 return (
    <>
      <RestaurantContainer >
        <Search/>
        <ContentContainer>
          <RestaurantInfoCard />
        </ContentContainer>
      </RestaurantContainer>
    </>
  );
}
