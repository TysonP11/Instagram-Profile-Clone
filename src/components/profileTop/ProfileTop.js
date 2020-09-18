import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Avatar from './Avatar';
import ProfileInfo from './ProfileInfo';

const ProfileTop = () => {
  return (
    <View style={styles.profileTop}>
      <Avatar></Avatar>
      <ProfileInfo />
    </View>
  );
};
const styles = StyleSheet.create({
  profileTop: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ProfileTop;
