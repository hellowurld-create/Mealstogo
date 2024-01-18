import { Card,Text,Image } from "react-native-paper";
import styled from "styled-components";


 export const RestaurantCard = styled(Card)`
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.bg.primary};
    overflow: hidden;
    margin-bottom: ${(props) => props.theme.space.m}
`;

export const RestaurantCardCover = styled(Card.Cover)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px; 
`;

export const Icon = styled.Image`
   height: 15px;
   width: 15px;
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.secondary};
    margin-top: ${(props) => props.theme.space.xxs};
`;

export const Info = styled.View`
   padding: ${(props) => props.theme.space.m};
`;

export const SectionContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${(props) => props.theme.space.sm};
`;

export const Rating = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: ${(props) => props.theme.space.xxs};
`;