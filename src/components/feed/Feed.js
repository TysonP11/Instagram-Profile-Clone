import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
});
