import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import colours from '../../../styles/colours';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: colours.OFF_WHITE,
  },
});

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <AntDesign name='arrowleft' size={24} color={colours.BUNTING} />
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'flex-start',
          fontWeight: 'bold',
          fontSize: 18,
          paddingLeft: 5,
        }}
      >
        H.P Lovecraft
      </Text>
      <TouchableOpacity
        style={{
          marginLeft: 'auto',
        }}
      >
        <Octicons name='three-bars' size={24} color={colours.BUNTING} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
