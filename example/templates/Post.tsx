import React from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';

const Post = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        gap: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1,
      }}>
      <Text variant="headlineMedium">What makes an app look native?</Text>
      <Text variant="bodyMedium">
        Its interface. It is responsive, fast and works reliably on both
        platforms. When building a React component, you have to style each of
        them yourself, according to the guidelines of the platform you are
        targeting. This can be overwhelming and non-trivial to do right.
      </Text>
      <Text variant="bodyMedium">
        Snappy interface that behaves just like any other app. It supports
        accessibility standards - in other words, it does everything a native
        app would do. Interactions in React Native are easy to do, but getting
        to 100% polish requires extra effort. Implementing exact
        platform-specific animations, making sure it runs under heavy load are
        just two examples of what we have to think when writing first-class
        interface.
      </Text>
      <Text variant="bodyMedium">
        Its interface. It is responsive, fast and works reliably on both
        platforms. When building a React component, you have to style each of
        them yourself, according to the guidelines of the platform you are
        targeting. This can be overwhelming and non-trivial to do right.
      </Text>
      <Text variant="bodyMedium">
        Snappy interface that behaves just like any other app. It supports
        accessibility standards - in other words, it does everything a native
        app would do. Interactions in React Native are easy to do, but getting
        to 100% polish requires extra effort. Implementing exact
        platform-specific animations, making sure it runs under heavy load are
        just two examples of what we have to think when writing first-class
        interface.
      </Text>
    </View>
  );
};

export default Post;
