// src/components/YourComponentFolder/YourComponent.js
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Search() {
  return (
    <>
        <View style={styles.header}>
          <Searchbar
            placeholder='Search'
            style={styles.searchBar}
            inputStyle={styles.searchInput}
            iconColor={'#000'}
            searchIcon={{ backgroundColor: '#000' }}
          />
        </View>
    </>
  );
}

const styles = StyleSheet.create({

  header: {
    flex: 0.1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
 
  },
  searchBar: {
    borderRadius: 15,
    backgroundColor: '#f0f0f0', 
    height: 50,
    borderColor: 'black',
    borderWidth: 1
  },
  searchInput: {
    color: '#000', 
    alignSelf: 'center'
  },
});
