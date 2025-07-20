import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts } from '@/styles/fonts';
import { TitleMainHeaderProps } from '@/interfaces/headers';

function TitleMainHeader({ title, rightChilds }: TitleMainHeaderProps) {
  return (
    <View style={styles.TitleMainHeader}>
      <Text style={styles.TitleText}>{title}</Text>
      <TouchableOpacity
        style={styles.ButtonWrapper}
        onPress={rightChilds?.onPress}
      >
        {rightChilds?.icon}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TitleMainHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 16,
    height: 56,
  },
  TitleText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.family.bold,
  },
  ButtonWrapper: {
    display: 'flex',
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default TitleMainHeader;
