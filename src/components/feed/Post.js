import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Post = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.post}
        source={{
          uri: props.path,
        }}
      ></Image>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  post: {
    borderRadius: 2,
    resizeMode: 'contain',
  },
});
