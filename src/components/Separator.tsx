import {
  Animated,
  GestureResponderHandlers,
  StyleSheet,
  View,
} from "react-native";

import React from "react";
import { useOrientationStyles } from "../utils";

interface SeparatorProps {
  handlers: GestureResponderHandlers;
  left?: JSX.Element;
  right?: JSX.Element;
}

export default function Separator({ left, right, handlers }: SeparatorProps) {
  const orientationStyles = useOrientationStyles("bar");

  return (
    <Animated.View
      pointerEvents="auto"
      {...handlers}
      style={[styles.container]}
    >
      {left}
      <View style={styles.barContainer}>
        <View
          pointerEvents="none"
          style={[styles.bar, orientationStyles]}
          id="bar"
        />
      </View>
      {right}
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  bar: {
    height: 4,
    width: 100,
    backgroundColor: "grey",
    borderRadius: 1000,
  },
  barContainer: {
    paddingVertical: 10,
  },
});
