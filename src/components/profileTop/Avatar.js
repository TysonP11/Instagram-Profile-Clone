import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={{
          uri:
            'http://www.avatarpress.com/wp-content/uploads/2016/11/providence-raulo-cover-09-HPL.jpg',
        }}
        style={styles.avatar}
      ></Image>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
});
