import React, { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../services/location/location.context';

const HeaderContainer = styled.View`
  flex: 0.1;
  align-items: flex-start;
  justify-content: center;
  padding-horizontal: ${(props) => props.theme.space.s};
`;

const StyledSearchbar = styled(Searchbar)`
  border-radius: 10px;
  border-width: 1px;
  border-color: #C9C8C4;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  height: 45px;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
`;


const Search = () => {
  const {keyword,search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  
  return (
    <HeaderContainer>
      <StyledSearchbar
        placeholder='Search'
        inputStyle={{ color: '#333', fontSize: 16, alignSelf: 'center' }} 
        iconColor='#333' 
        searchIcon={{ backgroundColor: 'transparent' }} 
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) =>
        {
          setSearchKeyword(text)
        }}
      />
    </HeaderContainer>
  );
};

export default Search;
