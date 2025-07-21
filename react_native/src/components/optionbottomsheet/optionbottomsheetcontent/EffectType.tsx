import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EffectType = () => {
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

  return (
    <View style={styles.typeContainer}>
      {effectCategories.map((category, index) => (
        <View key={index}>
          <Text style={styles.typeTitleText}>{category.category}</Text>
          <View style={styles.typeBox}>
            {category.effects.map((effect, effectIndex) => (
              <View style={styles.typeEachBox} key={effectIndex}>
                <View style={styles.typeEachTextBox}>
                  <Text style={styles.typeEachText}>{effect}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 32,
    alignSelf: 'stretch',
  },
  typeTitleText: {
    color: '#696B6F',
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
  },
  typeBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'stretch',
    rowGap: 0,
    columnGap: 6,
  },
  typeEachBox: {
    flexDirection: 'column',
    paddingVertical: 8,
    paddingHorizontal: 0,
    alignItems: 'flex-start',
  },
  typeEachTextBox: {
    flexDirection: 'row',
    height: 28,
    paddingVertical: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 4,
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F4F4F5',
    backgroundColor: '#FFF',
  },
  typeEachText: {
    color: '#94969C',
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
  },
});

export default EffectType;
