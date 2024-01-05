import React from "react";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star.svg'


const RestaurantCard = styled(Card)`
    borderRadius: 7px;
    backgroundColor:${(props) => props.theme.colors.bg.primary};
`

const RestaurantCardCover = styled(Card.Cover)`
        borderTopLeftRadius: 8px;
      borderTopRightRadius: 8px;
`

const Title = styled.Text`
      font-family: ${(props) => props.theme.fonts.heading};
      font-size: ${(props) => props.theme.fontSizes.body};
      color: ${(props) => props.theme.colors.ui.primary};
`
const Address = styled.Text`
      font-family: ${(props) => props.theme.fonts.monospace};
      font-size: ${(props) => props.theme.fontSizes.caption};
`

const Info = styled.View`
   padding : ${(props)=> props.theme.space.xs};
      marginTop: ${(props)=> props.theme.space.xs};
`
const Rating = styled.View`
   flex-direction: row;
   padding-top : ${(props)=> props.theme.space.xs};
   padding-bottom : ${(props)=> props.theme.space.xs};

`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
           "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
  } = restaurant;
  
  const ratingArray = Array.from(new Array(Math.floor(rating)));
    
    return (
          <RestaurantCard mode="outlined">
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>
          {name}
        </Title>
        <Address>
          {address}
          </Address>
          <Rating>
             {ratingArray.map(() => {
          <SvgXml xml={star} width={20} height={20}/>
          })}
          </Rating>
         
      </Info>
    </RestaurantCard>
    )
}

