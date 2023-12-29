import { Animated, ScrollView, StyleSheet } from "react-native";

import { forwardRef } from "react";
import { useOrientationComposedStyle } from "../utils";

export interface ISplitPanelProps {
  _height: Animated.Value;
  children: React.ReactNode;
}

export const SplitPanel = forwardRef<ScrollView, ISplitPanelProps>(
  ({ _height, children }: ISplitPanelProps, ref) => {
    const animatedStyles = useOrientationComposedStyle(_height);

    return (
      <Animated.View style={[styles.container, animatedStyles]}>
        <Animated.ScrollView ref={ref} style={[styles.section]}>
          {children}
        </Animated.ScrollView>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  section: {
    borderRadius: 20,
    backgroundColor: "black",
  },
  container: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "black",
  },
});

SplitPanel.displayName = " SplitPanel";
