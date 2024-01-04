import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Search from '../../../components/Search';
import { RestaurantInfoCard } from '../components/resturants-InfoCard.components';

export const ResturantsScreen = () => {
 return (
    <>
      <SafeAreaView style={styles.container}>
        <Search/>
        <View style={styles.content}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  content: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'red',
      justifyContent: 'flex-start',
    padding: 20,
  },
});
