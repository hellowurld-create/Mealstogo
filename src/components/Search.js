import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex: 0.2;
  align-items: flex-start;
  justify-content: center;
  padding-horizontal: ${(props) => props.theme.space.l};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  height: 50px;
  border-color: black;
  border-width: 1px;
`;

const Search = () => {
  return (
    <HeaderContainer>
      <StyledSearchbar
        placeholder='Search'
        inputStyle={{ color: '#000', alignSelf: 'center' }}
        iconColor='#000'
        searchIcon={{ backgroundColor: '#000' }}
      />
    </HeaderContainer>
  );
};

export default Search;
