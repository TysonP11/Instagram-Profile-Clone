import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SCREEN_WIDTH, normaliseSize } from '../../../utils/metadata';

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
const IMAGE_DIMENSION = normaliseSize((SCREEN_WIDTH - 15) / 3);
const styles = StyleSheet.create({
  container: {
    //padding: 1,
    //marginVertical: 0.5 + '%',
    paddingHorizontal: 1,
    paddingVertical: 1,
    alignItems: 'center',
  },
  post: {
    borderRadius: 2,
    width: IMAGE_DIMENSION,
    height: IMAGE_DIMENSION,
    resizeMode: 'cover',
  },
});
