import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { semanticNumber } from '@/styles/semantic-number';
import { semanticColor } from '@/styles/semantic-color';
import { fonts } from '@/styles/fonts';
import { type EmojiName, renderEmoji } from '@/components/toast/SvgMap';
interface ToastProps {
  message: string;
  visible: boolean;
  image: EmojiName;
  duration?: number;
}
const ANIMATION_DURATION = 250;

const Toast = ({ message, visible, duration = 1000, image }: ToastProps) => {
  const translateY = useRef(new Animated.Value(-10)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [shouldRender, setShouldRender] = useState(visible);
  const Emoji = renderEmoji(image);
  useEffect(() => {
    if (visible) {
      setShouldRender(true);

      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: -100,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setShouldRender(false);
        });
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, translateY, opacity]);
  if (!shouldRender) return null;
  return (
    <View style={styles.fakecontainer}>
      <Animated.View style={{ transform: [{ translateY }], opacity }}>
        <View style={styles.container}>
          {renderEmoji(image, { width: 16, height: 16 })} <Text style={styles.text}>{message}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fakecontainer: {
    position: 'absolute',
    top: 80,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    flexDirection: 'row',
    minHeight: semanticNumber.spacing[44],
    paddingVertical: semanticNumber.spacing.none,
    paddingHorizontal: semanticNumber.spacing[12],
    columnGap: semanticNumber.spacing[4],
    borderRadius: semanticNumber.borderRadius.xl,
    backgroundColor: semanticColor.toast.surface,
    shadowColor: semanticColor.toast.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: semanticNumber.borderRadius.md,

    elevation: 4,
  },

  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: semanticNumber.spacing[4],
  },
  text: {
    color: semanticColor.toast.text,
    fontFamily: fonts.family.medium,
    fontSize: 15,
    lineHeight: semanticNumber.spacing[22],
    letterSpacing: 0,
  },
});

export default Toast;
