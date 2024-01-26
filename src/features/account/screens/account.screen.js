import React from 'react';
import { Button } from 'react-native'; // Assuming you have a button component available
import res from '../../../../assets/res.png';
import { AccountBackground, AccountCover, AccountCoverInner, ButtonContainer, CoverImage, CoverSubtitle, CoverTitle, CustomButton } from '../components/account.styles';

export const AccountScreen = () => {
    return (
            <AccountCover>
                  <CoverImage source={res} />
                <AccountCoverInner>
                    <CoverTitle>Welcome to SharpMeals</CoverTitle>
                    <CoverSubtitle>Manage your profile and settings</CoverSubtitle>
                    <ButtonContainer>
                        <CustomButton title="Login" onPress={() => console.log("Login button pressed")} />
                        <CustomButton title="Register" onPress={() => console.log("Register button pressed")} />
                    </ButtonContainer>
                </AccountCoverInner>
            </AccountCover>
    );
};
