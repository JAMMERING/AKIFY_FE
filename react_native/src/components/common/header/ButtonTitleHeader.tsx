import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { HeaderProps } from '@/interfaces/headers';
import { semanticNumber } from '@/styles/semantic-number';

function ButtonTitleHeader({ title, leftChilds, rightChilds = [] }: HeaderProps) {
  return (
    <View style={styles.buttonTitleHeader}>
      <TouchableOpacity style={styles.leftChildWrapper} onPress={leftChilds?.onPress}>
        {leftChilds?.icon}
      </TouchableOpacity>
      <Text style={styles.titleWrapper}>{title}</Text>
      <View style={styles.rightButtonsWrapper}>
        {rightChilds.map((button, idx) => (
          <TouchableOpacity key={idx} style={styles.rightButton} onPress={button.onPress}>
            {button.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTitleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: semanticNumber.spacing[2],
    height: 48,
  },
  titleWrapper: {
    flex: 1,
    color: semanticColor.text.primary,
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.XL,
    lineHeight: fonts.lineHeight.XL,
    letterSpacing: fonts.letterSpacing.none,
  },
  leftChildWrapper: {
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  rightButtonsWrapper: {
    flexDirection: 'row',
  },
  rightButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default ButtonTitleHeader;
