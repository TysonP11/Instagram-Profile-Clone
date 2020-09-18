import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colours from '../../../styles/colours';
import { normaliseSize as normalise } from '../../../utils/metadata';

const Specs = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.specCount}> {props.count} </Text>
      <Text style={styles.specTitle}> {props.title} </Text>
    </View>
  );
};

export default Specs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  specCount: {
    fontWeight: 'bold',
    fontSize: normalise(20),
  },
  specTitle: {
    fontWeight: 'normal',
    fontSize: normalise(15),
    color: colours.BLUE_HAZE,
  },
});
