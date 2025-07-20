import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CenterHeaderProps } from '@/interfaces/headers';
import { fonts } from '@/styles/fonts';

function CenterHeader({ title, leftChilds, rightChilds }: CenterHeaderProps) {
  return (
    <View style={styles.CenterHeader}>
      <TouchableOpacity
        style={styles.LeftChildWrapper}
        onPress={leftChilds?.onPress}
      >
        {leftChilds?.icon}
      </TouchableOpacity>
      <Text style={styles.TitleText}>{title}</Text>
      <TouchableOpacity
        style={styles.RightChildWrapper}
        onPress={rightChilds?.onPress}
      >
        {rightChilds?.icon}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  CenterHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    height: 48,
  },
  TitleText: {
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.XL,
    lineHeight: fonts.lineHeight.XL,
    letterSpacing: fonts.letterSpacing.none,
  },
  LeftChildWrapper: {
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  RightChildWrapper: {
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default CenterHeader;
