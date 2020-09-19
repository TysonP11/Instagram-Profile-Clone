import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colours from '../../../styles/colours';
import { normaliseSize as normalise } from '../../../utils/metadata';

const ButtonsContainer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.msgButton}>
        <Text style={styles.msgText}>Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: colours['OFF_WHITE'],
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 2 + '%',
  },
  followButton: {
    flex: 4,
    borderRadius: normalise(10),
    backgroundColor: colours['BLUE_CYAN'],
    alignItems: 'center',
    justifyContent: 'center',
    height: normalise(30),
    marginRight: 2 + '%',
    shadowColor: colours['LAVENDER_LIGHT'],
    shadowOpacity: 0.4,
    shadowRadius: 2.5,
    shadowOffset: {
      // iOS only
      width: 1.618,
      height: 1,
    },
    elevation: 4,
  },
  followText: {
    fontWeight: 'bold',
    fontSize: normalise(14),
    color: colours['WHITE'],
  },
  msgButton: {
    flex: 4,
    borderRadius: normalise(10),
    backgroundColor: colours['WHITE'],
    alignItems: 'center',
    justifyContent: 'center',
    height: normalise(30),
    marginRight: 2 + '%',
    borderColor: colours['GREY_1'],
    borderWidth: 1,
    shadowColor: colours['LAVENDER_LIGHT'],
    shadowOpacity: 0.4,
    shadowRadius: 2.5,
    shadowOffset: {
      // iOS only
      width: 1.618,
      height: 1,
    },
    elevation: 4,
  },
  msgText: {
    fontWeight: 'bold',
    fontSize: normalise(14),
    color: colours['MIDNIGHT_EXPRESS'],
  },
});
