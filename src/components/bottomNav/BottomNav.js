import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colours from '../../../styles/colours';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Entypo name='home' size={30} color={colours['MIDNIGHT_EXPRESS']} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Ionicons name='ios-add-circle' size={30} color='black' />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <AntDesign name='search1' size={30} color='black' />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Ionicons name='ios-notifications' size={30} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colours['OFF_WHITE'],
    marginTop: 'auto',
    shadowColor: colours['LAVENDER_LIGHT'],
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      // iOS only
      width: 1.618,
      height: 1,
    },
    elevation: 4, // Android only
  },
});
