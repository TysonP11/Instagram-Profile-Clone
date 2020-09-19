import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colours from '../../../styles/colours';
import Post from './Post';

const Feed = (props) => {
  return (
    <View style={styles.feedContainer}>
      <FlatList
        numColumns={3}
        data={props.data}
        renderItem={({ item }) => <Post path={item.url} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  feedContainer: {
    flex: 12,
    backgroundColor: colours['OFF_WHITE'],
    alignItems: 'center',
    //paddingHorizontal: 2 + '%',
    paddingVertical: 2,
    borderTopColor: colours['GREY_1'],
    borderTopWidth: 1,
  },
});
