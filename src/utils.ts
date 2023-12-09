import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {MutableRefObject, useEffect, useState} from 'react';

export const useStyleProperty = () => {
  const orientation = useOrientation();
  if (orientation === 'landscape') {
    return 'height';
  }
  return 'width';
};

export const getOrientation = (data: {width: number; height: number}) => {
  return data.width > data.height ? 'portrait' : 'landscape';
};

export const useOrientation = (cb?: () => void) => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    getOrientation(Dimensions.get('screen')),
  );
  useEffect(() => {
    Dimensions.addEventListener('change', ({screen}) => {
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
  const {width, height} = Dimensions.get('screen');
  return Math.max(width, height);
};

export type Orientation = 'portrait' | 'landscape';

export const orientationStyles = {
  portrait: StyleSheet.create({
    parentContainer: {
      flexDirection: 'row',
    },
    bar: {
      height: 100,
      width: 5,
      backgroundColor: 'grey',
    },
  }),
  landscape: StyleSheet.create({
    parentContainer: {},
    bar: {},
  }),
};

export const useOrientationStyles = (
  className: keyof (typeof orientationStyles)[Orientation],
) => {
  const orientation = useOrientation();
  return orientationStyles[orientation][className];
};

export const getDragFn = (orientation: Orientation) => {
  const height = Dimensions.get('screen').height / 2 - 24;
  const width = Dimensions.get('screen').width / 2 - 32;
  const logic = {
    portrait: (e: GestureResponderEvent) => {
      let touch = e.nativeEvent.pageX;

      const pan2HeightValue = touch;
      const panHeightValue = width * 2 - touch;
      return {pan2HeightValue, panHeightValue};
    },
    landscape: (
      e: GestureResponderEvent,
      ref?: MutableRefObject<ScrollView | null>,
    ) => {
      let touch = e.nativeEvent.pageY;

      const pan2HeightValue = touch;
      const panHeightValue = height * 2 - touch;
      ref?.current?.scrollTo({
        x: 0,
        y: panHeightValue * 0.3,
        animated: true,
      });
      return {pan2HeightValue, panHeightValue};
    },
  };
  return logic[orientation];
};

export const useOrientationComposedStyle = (value: Animated.Value) => {
  const orientation = useOrientation();
  if (orientation === 'landscape') {
    return {
      height: value,
    };
  }
  return {
    width: value,
  };
};
