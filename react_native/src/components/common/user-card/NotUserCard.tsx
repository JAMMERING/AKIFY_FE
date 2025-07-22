import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

function NotUserCard() {
  return (
    <View style={styles.notUserCard}>
      <Text style={styles.text}>(탈퇴한 유저)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notUserCard: {
    padding: 16,
    backgroundColor: semanticColor.surface.lightGray,
    borderRadius: semanticNumber.borderRadius.lg,
    width: Dimensions.get('window').width - 64,
  },
  text: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.MD,
    lineHeight: fonts.lineHeight.MD,
    letterSpacing: fonts.letterSpacing.none,
    color: semanticColor.text.tertiary,
  },
});

export default NotUserCard;
