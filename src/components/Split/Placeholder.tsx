import {Dimensions, ScrollView, StyleSheet} from 'react-native';

import React from 'react';

export default function Placeholder() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.placeholderContainer}
    />
  );
}

const styles = StyleSheet.create({
  placeholderContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    opacity: 0.5,
    height: Dimensions.get('screen').height / 2 - 32,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
  },
});
