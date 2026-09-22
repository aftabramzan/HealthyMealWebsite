import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Animated, Platform, View } from 'react-native';

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const offset = useRef(new Animated.Value(14)).current;
  const useNativeDriver = Platform.OS !== 'web';

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 650, useNativeDriver }),
        Animated.spring(offset, { toValue: 0, damping: 15, stiffness: 110, mass: 0.8, useNativeDriver }),
      ]),
    ]).start();
  }, [delay, offset, opacity]);

  return <Animated.View style={{ opacity, transform: [{ translateY: offset }] }}><View>{children}</View></Animated.View>;
}
