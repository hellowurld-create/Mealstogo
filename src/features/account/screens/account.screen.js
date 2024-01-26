import React from 'react';
import { Button } from 'react-native'; // Assuming you have a button component available
import res from '../../../../assets/res.png';
import { AccountCover, AccountCoverInner, ButtonContainer, CoverImage, CoverSubtitle, CoverTitle, CustomButton, CustomButtonText } from '../components/account.styles';

export const AccountScreen = () => {
    return (
            <AccountCover>
                  <CoverImage source={res} />
                <AccountCoverInner>
                    <CoverTitle>Welcome to Sharp Meals</CoverTitle>
                    <CoverSubtitle>Get the best locations for restaurants.</CoverSubtitle>
                    <ButtonContainer>
                    <CustomButton
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => console.log("Login button pressed")}>
                        <CustomButtonText>Login</CustomButtonText>
                    </CustomButton>
                    <CustomButton onPress={() => console.log("Register button pressed")}>
                        <CustomButtonText>Register</CustomButtonText>
                    </CustomButton>
                    </ButtonContainer>
                </AccountCoverInner>
            </AccountCover>
    );
};
