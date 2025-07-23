import React,{useState} from 'react';
import { View, Text, StyleSheet,Pressable
 } from 'react-native';
import MainButton from '../../button/MainButton';
import { semanticColor } from '@/styles/semantic-color';
import { fonts } from '@/styles/fonts';
import { semanticNumber } from '@/styles/semantic-number';

interface EffectTypeProps {
  onPress: () => void;
}
const EffectType = ({ onPress }: EffectTypeProps) => {
  const [selectedEffects, setSelectedEffects] = useState<Record<string, string | null>>({});
  const effectCategories = [
    {
      category: '멀티 계열',
      effects: ['멀티이펙터'],
    },
    {
      category: '드라이브 계열',
      effects: ['오버드라이브', '디스토션', '퍼즈', '부스터', '프리앰프'],
    },
    {
      category: '모듈레이션 계열',
      effects: ['코러스', '플랜저', '페이저', '트레몰로', '비브라토', '로터리 스피커', '엔벨롭 필터'],
    },
    {
      category: '시공간 계열',
      effects: ['딜레이', '리버브', '루퍼'],
    },
    {
      category: '다이나믹 계열',
      effects: ['컴프레서', '서스테이너', '리미터', '노이즈 게이트'],
    },
  ];
   const handleSelectEffect = (category: string, effect: string) => {
  setSelectedEffects((prev) => {
    const alreadySelected = prev[category] === effect;
    return {
      ...prev,
      [category]: alreadySelected ? null : effect,
    };
  });
};
  
  const onEffectPress = () => {
    //여기에 api 추가 예정
    onPress();
  };
  return (
    <View style={styles.typeContainer}>
      {effectCategories.map((category, index) => (
        <View key={index}>
          <Text style={styles.typeTitleText}>{category.category}</Text>
          <View style={styles.typeBox}>
            {category.effects.map((effect, effectIndex) => (
              <View style={styles.typeEachBox} key={effectIndex}>
                <Pressable style={[styles.typeEachTextBox, selectedEffects[category.category] === effect ? textStyles.selectedTypeEachTextBox : textStyles.unselectedTypeEachTextBox]} onPress={() => handleSelectEffect(category.category, effect)}>
                  <Text style={[styles.typeEachText, selectedEffects[category.category] === effect ? textStyles.selectedTypeEachText : textStyles.unselectedTypeEachText]}>{effect}</Text>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      ))}
       <MainButton onPress={onEffectPress}>선택 완료</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: semanticNumber.spacing[32],
    alignSelf: 'stretch',
  },
  typeTitleText: {
    color: semanticColor.text.secondary,
    fontFamily: fonts.family.bold,
    fontSize: 14,
    lineHeight: semanticNumber.spacing[18],
    letterSpacing: 0,
  },
  typeBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'stretch',
    rowGap: 0,
    columnGap: semanticNumber.spacing[6],
  },
  typeEachBox: {
    flexDirection: 'column',
    paddingVertical: semanticNumber.spacing[8],
    paddingHorizontal: semanticNumber.spacing.none,
    alignItems: 'flex-start',
  },
  typeEachTextBox: {
    flexDirection: 'row',
    height: 28,
    paddingVertical: semanticNumber.spacing[2],
    paddingHorizontal: semanticNumber.spacing[10],
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: semanticNumber.spacing[4],
    alignSelf: 'stretch',
    borderRadius: semanticNumber.borderRadius.md,
    borderWidth: 1,
  },
  typeEachText: {
    fontFamily: fonts.family.regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
});
const textStyles = StyleSheet.create({
    selectedTypeEachText:{
        color: semanticColor.text.primaryOnDark,
    },
    unselectedTypeEachText:{
    color: semanticColor.text.tertiaryOnDark,
    },
    selectedTypeEachTextBox:{
        backgroundColor: semanticColor.surface.dark,
        borderWidth: 1,
        borderColor: semanticColor.border.dark,
    },
    unselectedTypeEachTextBox:{
      backgroundColor: semanticColor.surface.white,
          borderWidth: 1,
      borderColor: semanticColor.border.light,
    },
});

export default EffectType;
