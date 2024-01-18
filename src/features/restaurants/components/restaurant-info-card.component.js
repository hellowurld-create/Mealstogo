import React from "react";
import { SvgXml } from "react-native-svg";


import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Favourite } from "../../../components/favourites/favourite.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Address, Icon, Info, Rating, RestaurantCard, RestaurantCardCover, SectionContainer } from "./restaurant-info-card.styles";


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
           "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId
  } = restaurant;
  
  const ratingArray = Array.from(new Array(Math.floor(rating)));
    
  return (
      <RestaurantCard elevation={5}>
          <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
            <Text variant='label'>{name}</Text>
            <Address>{address}</Address>
            <SectionContainer>
                <Rating>
                    {ratingArray.map((_, i) => (
                        <SvgXml key={`star-${placeId}-${i}`} xml={star} width={15} height={15} fill="#FFD700" />
                    ))}
                </Rating>
                {isClosedTemporarily && (
                    <Text variant='error'>
                        CLOSED TEMPORARILY
                    </Text>
                )}
                <Spacer variant="left" size="small" style={{ flexDirection: 'row' }}>
                      {isOpenNow && <SvgXml xml={open} width={20} height={20} fill="#4CAF50" />}
                  </Spacer>
                   <Spacer variant="left" size="small">
                      <Icon source={{ uri: icon }} />
                      </Spacer>
            </SectionContainer>
        </Info>
    </RestaurantCard>
  )
}
