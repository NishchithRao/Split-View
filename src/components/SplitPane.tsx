import {
  Animated,
  Dimensions,
  PanResponder,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { ReactElement } from "react";
import {
  getDragFn,
  getOrientation,
  largestSideDimension,
  useOrientation,
  useOrientationStyles,
} from "../utils";

import Placeholder from "./Placeholder";
import Separator from "./Separator";
import { SplitPanel } from "./SplitPanel";
import { useRef } from "react";

export interface SplitBarProps {
  /**
   * The top/left screen.
   */
  startScreen: JSX.Element;
  endScreen?: JSX.Element;
  /**
   * Programatically enable/disable split view
   */
  enabled?: boolean;
  /**
   * Show element on the left of the spearator bar
   */
  left?: JSX.Element;
  /**
   * Show element on the right of the spearator bar
   */
  right?: JSX.Element;
}

/**
 *
 * Enables multiple screens to share the same screen simultaneously.
 * Screens can be side by side or one above the other
 * @param {SplitBarProps} props
 */
export const SplitPane = ({
  endScreen,
  startScreen,
  enabled,
  left,
  right,
}: SplitBarProps): JSX.Element | null => {
  const startPanValue = useRef(
    new Animated.Value(largestSideDimension() / 2 - 24)
  ).current;
  const endPaneValue = useRef(
    new Animated.Value(largestSideDimension() / 2 - 32)
  ).current;
  const startPaneRef = useRef<ScrollView>(null);

  useOrientation(() => {
    startPanValue.setValue(largestSideDimension() / 2 - 24);
    endPaneValue.setValue(largestSideDimension() / 2 - 32);
  });

  const orientationStyles = useOrientationStyles("parentContainer");

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e) => {
        const orientation = getOrientation(Dimensions.get("screen"));
        const fn = getDragFn(orientation);
        const { pan2HeightValue, panHeightValue } = fn(e, startPaneRef);

        endPaneValue.setValue(panHeightValue);
        startPanValue.setValue(pan2HeightValue);
      },
      onPanResponderStart: () => true,
      onPanResponderRelease: () => {
        return true;
      },
    })
  ).current;

  if (!enabled) {
    return startScreen || null;
  }

  return (
    <View style={[styles.parentContainer, orientationStyles]}>
      <SplitPanel ref={startPaneRef} _height={startPanValue}>
        {startScreen}
      </SplitPanel>

      <Separator
        left={left}
        right={right}
        handlers={panResponder.panHandlers}
      />

      <SplitPanel _height={endPaneValue}>
        {endScreen || <Placeholder />}
      </SplitPanel>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    height: Dimensions.get("screen").height,
    backgroundColor: "black",
    justifyContent: "center",
    overflow: "hidden",
  },
});
