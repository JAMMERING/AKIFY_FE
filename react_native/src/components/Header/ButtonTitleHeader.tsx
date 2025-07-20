import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { ButtonTitleHeaderProps } from '@/interfaces/headers';

function ButtonTitleHeader({
  title,
  leftChilds,
  rightChilds = [],
}: ButtonTitleHeaderProps) {
  return (
    <View style={styles.ButtonTitleHeader}>
      <TouchableOpacity
        style={styles.LeftChildWrapper}
        onPress={leftChilds?.onPress}
      >
        {leftChilds?.icon}
      </TouchableOpacity>
      <Text style={styles.TitleWrapper}>{title}</Text>
      <View style={styles.RightButtonsWrapper}>
        {rightChilds.map((button, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.RightButton}
            onPress={button.onPress}
          >
            {button.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonTitleHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    height: 48,
  },
  TitleWrapper: {
    display: 'flex',
    flex: 1,
    color: semanticColor.text.primary,
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
    flexShrink: 0,
  },
  RightButtonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  RightButton: {
    width: 44,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default ButtonTitleHeader;
