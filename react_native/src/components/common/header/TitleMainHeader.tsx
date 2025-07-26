import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts } from '@/styles/fonts';
import { HeaderProps } from '@/interfaces/headers';

function TitleMainHeader({ title, rightChilds }: HeaderProps) {
  return (
    <View style={styles.titleMainHeader}>
      <Text style={styles.titleText}>{title}</Text>
      {rightChilds?.map((child, idx) => (
        <TouchableOpacity key={idx} style={styles.buttonWrapper} onPress={child?.onPress}>
          {child?.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleMainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 16,
    height: 56,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.family.bold,
  },
  buttonWrapper: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default TitleMainHeader;
