import { StyleSheet, Text, View } from 'react-native';
import { semanticNumber } from '@/styles/semantic-number';
import { semanticColor } from '@/styles/semantic-color';
import { fonts } from '@/styles/fonts';

type ChipVariant =
  | 'condition'
  | 'default'
  | 'darkBrand'
  | 'red'
  | 'brand'
  | 'dark';

type ChipSize = 'small' | 'medium';

interface ChipProps {
  text: string;
  variant?: ChipVariant;
  size?: ChipSize;
}

function Chip({ text, variant = 'default', size = 'small' }: ChipProps) {
  return (
    <View style={[styles.chipBase, variantStyles[variant], sizeStyles[size]]}>
      <Text
        style={[styles.textBase, textStyles[variant], textSizeStyles[size]]}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chipBase: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: semanticNumber.borderRadius.sm,
  },
  textBase: {
    fontFamily: fonts.family.medium,
  },
});

const variantStyles = StyleSheet.create({
  condition: {
    backgroundColor: semanticColor.chip.condition,
  },
  default: {
    backgroundColor: semanticColor.chip.default,
  },
  darkBrand: {
    backgroundColor: semanticColor.chip.dark,
  },
  red: {
    backgroundColor: semanticColor.chip.red,
  },
  brand: {
    backgroundColor: semanticColor.chip.delivery,
  },
  dark: {
    backgroundColor: semanticColor.chip.dark,
  },
});

const textStyles = StyleSheet.create({
  condition: {
    color: semanticColor.text.chipCondition,
  },
  default: {
    color: semanticColor.text.chipDefault,
  },
  darkBrand: {
    color: semanticColor.text.chipDark,
  },
  red: {
    color: semanticColor.text.chipRed,
  },
  brand: {
    color: semanticColor.text.chipDelivery,
  },
  dark: {
    color: semanticColor.text.primaryOnDark,
  },
});

const sizeStyles = StyleSheet.create({
  small: {
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  medium: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});

const textSizeStyles = StyleSheet.create({
  small: {
    fontSize: fonts.size['2XS'],
    lineHeight: fonts.lineHeight['2XS'],
    letterSpacing: fonts.letterSpacing.none,
  },
  medium: {
    fontSize: fonts.size.SM,
    lineHeight: fonts.lineHeight.MD,
    letterSpacing: fonts.letterSpacing.none,
  },
});

export default Chip;
