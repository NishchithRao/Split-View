import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  ScrollView,
} from "react-native";
import { MutableRefObject, useEffect, useState } from "react";

export const getOrientation = (data: { width: number; height: number }) => {
  return data.width > data.height ? "portrait" : "landscape";
};

export const useOrientation = (cb?: () => void) => {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    getOrientation(Dimensions.get("screen"))
  );
  useEffect(() => {
    Dimensions.addEventListener("change", ({ screen }) => {
      const currentOrientation = getOrientation({
        width: screen.width,
        height: screen.height,
      });
      cb?.();
      setOrientation(currentOrientation);
    });
  }, [cb]);
  return orientation;
};

export const largestSideDimension = () => {
  const { width, height } = Dimensions.get("screen");
  return Math.max(width, height);
};

export type Orientation = "portrait" | "landscape";

export const getDragFn = (orientation: Orientation) => {
  const screenHeight = Dimensions.get("screen").height;
  const screenWidth = Dimensions.get("screen").width;
  const logic = {
    portrait: (e: GestureResponderEvent) => {
      let touch = e.nativeEvent.pageX;
      const pan2HeightValue = touch;
      const panHeightValue = screenWidth - touch;
      return { pan2HeightValue, panHeightValue };
    },
    landscape: (
      e: GestureResponderEvent,
      ref?: MutableRefObject<ScrollView | null>
    ) => {
      let touch = e.nativeEvent.pageY;
      if (touch > screenHeight - 100) {
        return { pan2HeightValue: screenHeight - 78, panHeightValue: 32 };
      }
      if (touch < 100) {
        return { pan2HeightValue: 16, panHeightValue: screenHeight - 16 };
      }
      const pan2HeightValue = touch;
      const panHeightValue = screenHeight - touch;
      ref?.current?.scrollTo({
        x: 0,
        y: panHeightValue * 0.3,
        animated: true,
      });
      return { pan2HeightValue, panHeightValue };
    },
  };
  return logic[orientation];
};

export const useOrientationComposedStyle = (value: Animated.Value) => {
  const orientation = useOrientation();
  if (orientation === "landscape") {
    return {
      height: value,
    };
  }
  return {
    width: value,
  };
};
