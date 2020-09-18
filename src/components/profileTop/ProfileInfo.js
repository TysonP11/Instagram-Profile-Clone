import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Specs from './Specs';

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfoContainer}>
      <Specs title='Photos' count='13'></Specs>
      <Specs title='Followers' count='7.2k'></Specs>
      <Specs title='Following' count='234'></Specs>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileInfoContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
