import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface MainButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

const MainButton = ({ children, onPress, disabled }: MainButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled ? styles.disabled : styles.enabled]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: semanticNumber.spacing[14],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: semanticNumber.borderRadius.lg,
  },
  text: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.LG,
    color: semanticColor.text.buttonMain,
  },
  enabled: {
    backgroundColor: semanticColor.button.mainEnabled,
  },
  disabled: {
    backgroundColor: semanticColor.button.mainDisabled,
  },
});

export default MainButton;
