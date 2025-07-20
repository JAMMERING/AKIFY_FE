import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
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
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.LG,
    color: semanticColor.text.buttonMain,
  },
  enabled: {
    backgroundColor: '#1E1E1F',
  },
  disabled: {
    backgroundColor: '#BFC0C4',
  },
});

export default MainButton;
