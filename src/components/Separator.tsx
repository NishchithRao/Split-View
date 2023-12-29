import {
  Animated,
  Dimensions,
  GestureResponderHandlers,
  StyleSheet,
  View,
} from "react-native";

import { useOrientation } from "../utils";

interface SeparatorProps {
  handlers: GestureResponderHandlers;
  left?: JSX.Element;
  right?: JSX.Element;
}

export default function Separator({ left, right, handlers }: SeparatorProps) {
  const orientation = useOrientation();

  return (
    <Animated.View
      pointerEvents="auto"
      {...handlers}
      style={[styles.container, styles[orientation]]}
    >
      {left}
      <View style={barStyles.barContainer}>
        <View
          pointerEvents="none"
          style={[barStyles[orientation], barStyles.bar]}
          id="bar"
        />
      </View>
      {right}
    </Animated.View>
  );
}

const barStyles = StyleSheet.create({
  bar: {
    backgroundColor: "grey",
    borderRadius: 1000,
  },
  portrait: {
    height: 100,
    width: 5,
  },
  landscape: {
    height: 4,
    width: 100,
  },
  barContainer: {
    paddingVertical: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  portrait: {
    flexDirection: "column",
    height: Dimensions.get("screen").height - 50,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  landscape: {
    flexDirection: "row",
  },
});
