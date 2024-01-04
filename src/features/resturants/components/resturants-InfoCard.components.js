import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';

const Title = styled.Text`
      padding : 9px;
      marginTop: 8px;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
           "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address = '100 somerandom street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    
    return (
          <Card mode="outlined" style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cardCover} />
      <Card.Content>
        <Title>
          {name}
        </Title>
      </Card.Content>
    </Card>
    )
}

const styles = StyleSheet.create({
    
   card: { 
    borderRadius: 7,
    elevation: 4,
    backgroundColor:'white'
  },
    cardCover: {
    borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
  },
})