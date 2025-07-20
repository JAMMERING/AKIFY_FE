import {
  BUTTON_STYLE,
  ButtonState,
  ButtonTheme,
} from '@/constants/ButtonStyle';
import { fonts } from '@/styles/fonts';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface VariantButtonProps {
  theme?: ButtonTheme;
  isLarge?: boolean;
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

const VariantButton = ({
  theme = 'main',
  isLarge,
  children,
  onPress,
  disabled,
}: VariantButtonProps) => {
  const [buttonState, setButtonState] = useState<ButtonState>('enabled');
  const currentColorStyle = useMemo(() => {
    return BUTTON_STYLE[theme][buttonState];
  }, [theme, buttonState]);
  useEffect(() => {
    if (disabled) {
      setButtonState('disabled');
    } else {
      setButtonState('enabled');
    }
  }, [disabled]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        console.log('Pressed In');
        setButtonState('pressed');
      }}
      onPressOut={() => setButtonState('enabled')}
      disabled={disabled}
      style={[
        isLarge ? styles.largeButton : styles.smallButton,
        { backgroundColor: currentColorStyle.backgroundColor },
      ]}
    >
      <Text
        style={[
          isLarge ? styles.largeText : styles.smallText,
          { color: currentColorStyle.textColor },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  largeButton: {
    alignSelf: 'flex-start',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  largeText: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.LG,
    lineHeight: fonts.lineHeight.LG,
  },
  smallButton: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  smallText: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.XS,
    lineHeight: fonts.lineHeight.XS,
  },
});

export default VariantButton;
