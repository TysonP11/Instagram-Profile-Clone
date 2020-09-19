import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/topNav/Header';
import ProfileTop from './src/components/profileTop/ProfileTop';
import ButtonContainer from './src/components/profileTop/ButtonsContainer';
import colours from './styles/colours';
import { photos } from './assets/data.json';
import Feed from './src/components/feed/Feed';
import BottomNav from './src/components/bottomNav/BottomNav';

import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileTop />
      <ButtonContainer />
      <Feed data={photos}></Feed>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.OFF_WHITE,
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight,
  },
});
