import { BUTTON_STYLE, ButtonState, ButtonTheme } from '@/constants/ButtonStyle';
import { fonts } from '@/styles/fonts';
import { semanticNumber } from '@/styles/semantic-number';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface VariantButtonProps {
  children: string;
  theme?: ButtonTheme;
  isLarge?: boolean;
  disabled?: boolean;
  isFull?: boolean;
  onPress: () => void;
}

const VariantButton = ({ children, theme = 'main', isLarge, disabled, isFull, onPress }: VariantButtonProps) => {
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
        { backgroundColor: currentColorStyle.backgroundColor, alignSelf: isFull ? 'stretch' : 'flex-start' },
      ]}>
      <Text style={[isLarge ? styles.largeText : styles.smallText, { color: currentColorStyle.textColor }]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  largeButton: {
    paddingVertical: semanticNumber.spacing[14],
    paddingHorizontal: semanticNumber.spacing[16],
    borderRadius: semanticNumber.borderRadius.lg,
  },
  largeText: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.LG,
    lineHeight: fonts.lineHeight.LG,
  },
  smallButton: {
    paddingVertical: semanticNumber.spacing[2],
    paddingHorizontal: semanticNumber.spacing[10],
    borderRadius: semanticNumber.borderRadius.md,
  },
  smallText: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.XS,
    lineHeight: fonts.lineHeight.XS,
  },
});

export default VariantButton;
