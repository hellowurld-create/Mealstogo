import styled from "styled-components";



export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); 
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AccountCoverInner = styled.View`
    flex: 0.8;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    background-color: white;
`;

export const CoverTitle = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #333;
    padding: 10px; 
    text-align: center; 
    letter-spacing: 1px; /* Adjust as needed */
    text-transform: capitalize; 
    line-height: 48px; 
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1); /* Add text shadow for depth */
`;

export const CoverSubtitle = styled.Text`
    font-size: 16px;
    color: #666; 
    text-align: center; 
    margin-bottom: 20px; /* Adjust as needed */
`;

export const CoverImage = styled.Image`
    width: 350px;
    height: 350px;
    flex:1;
    align-items: center;
    justify-content: center;
    margin-top:70px;
`;

export const ButtonContainer = styled.View`
    margin-top: 0px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    background-color: #007bff;
    padding: 25px 30px; 
    border-radius: 5px;
    align-items: center;
    margin: 8px 10px;
`;

export const CustomButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px; 
    text-transform: uppercase; 
`;
