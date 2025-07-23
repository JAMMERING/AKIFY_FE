import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import X from '@/assets/icons/X.svg';
import EffectType from '@/components/common/bottom-sheet/bottom-sheet-contents/EffectType';
import { semanticColor } from '@/styles/semantic-color';
import { fonts } from '@/styles/fonts';
import { semanticNumber } from '@/styles/semantic-number';
import SelectBrand from './bottom-sheet-contents/SelectBrand';
interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title: '이펙터 타입' | '브랜드 선택' | '지역 선택';
}

const BottomSheet = ({ visible, onClose, title }: BottomSheetProps) => {
  return (
    <View style={styles.container}>
      {visible && (
        <>
          <View style={styles.title}>
            <Text>{title}</Text>
            <X width={24} height={24} />
          </View>
          <View style={styles.content}>
            {title === '이펙터 타입' && <EffectType onPress={onClose} />}
            {title=== '브랜드 선택' && <SelectBrand />}
          </View>
        </>
      )} 
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
    paddingTop: semanticNumber.spacing[18],
    paddingBottom: semanticNumber.spacing[18],
    paddingRight: semanticNumber.spacing[20],
    paddingLeft: semanticNumber.spacing[24],
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopLeftRadius: semanticNumber.spacing[24],
    borderTopRightRadius: semanticNumber.spacing[24],
    borderBottomLeftRadius: semanticNumber.spacing.none,
    borderBottomRightRadius: semanticNumber.spacing.none,
    backgroundColor: semanticColor.surface.white,
  },
  titleText: {
    color: semanticColor.text.primary,
    fontFamily: fonts.family.semibold,
    fontSize: 18,
    lineHeight: semanticNumber.spacing[24],
    letterSpacing: 0,
  },
  content: {
    flexDirection: 'column',
    width: 390,
    paddingVertical: semanticNumber.spacing[16],
    paddingHorizontal: semanticNumber.spacing[24],
    alignItems: 'flex-start',
    rowGap: semanticNumber.spacing[16],
    backgroundColor: semanticColor.surface.white,
  },
});

export default BottomSheet;
