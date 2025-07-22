import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { StyleSheet, Text, View } from 'react-native';

type NoResultSectionProps = {
  emoji: React.ReactNode;
  title: string;
  description: string;
  button?: React.ReactNode;
};

// button 부분은 버튼 컴포넌트 사용
function NoResultSection({ emoji, title, description, button }: NoResultSectionProps) {
  return (
    <View style={styles.noResultSection}>
      <View style={styles.infoWrapper}>
        {emoji}
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      {button}
    </View>
  );
}

const styles = StyleSheet.create({
  noResultSection: {
    alignItems: 'center',
    paddingVertical: 64,
    gap: 24,
  },
  infoWrapper: {
    alignItems: 'center',
    gap: semanticNumber.spacing[4],
  },
  titleText: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.SM,
    lineHeight: fonts.lineHeight.SM,
    letterSpacing: fonts.letterSpacing.none,
    color: semanticColor.text.secondary,
  },
  descriptionText: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.XS,
    lineHeight: fonts.lineHeight.XS,
    letterSpacing: fonts.letterSpacing.none,
    color: semanticColor.text.secondary,
  },
});

export default NoResultSection;
