import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import X from '@/assets/icons/X.svg';
import EffectType from './optionbottomsheetcontent/EffectType';
interface OptionBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title: string;
}

const OptionBottomSheet = ({ visible, onClose, title }: OptionBottomSheetProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>{title}</Text>
        <X width={24} height={24} />
      </View>
      <View style={styles.content}>
        <EffectType />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  title: {
    flexDirection: 'row',
    width: 390,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 20,
    paddingLeft: 24,
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#ffffff',
  },
  titleText: {
    color: '#1E1E1F',
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
  },
  content: {
    flexDirection: 'column',
    width: 390,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
    rowGap: 16,
    backgroundColor: '#FFF',
  },
});

export default OptionBottomSheet;
