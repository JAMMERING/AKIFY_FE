import { StyleSheet, Text, View } from 'react-native';
import VariantButton from '@/components/common/button/VariantButton';
import { semanticNumber } from '@/styles/semantic-number';
import { semanticColor } from '@/styles/semantic-color';
import { fonts } from '@/styles/fonts';

const RecentSearchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>최근 검색어</Text>
      <VariantButton theme="sub" onPress={() => console.log()}>
        전체 삭제
      </VariantButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: semanticNumber.spacing[16],
  },
  text: {
    color: semanticColor.text.tertiary,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.SM,
    lineHeight: fonts.lineHeight.MD,
  },
});

export default RecentSearchBar;
