import { semanticColor } from '@/styles/semantic-color';
import { View, StyleSheet } from 'react-native';

type SectionSeparatorType = 'line-with-padding' | 'line' | 'rectangle';

interface SectionSeparatorProps {
  type?: SectionSeparatorType;
}

const SectionSeparator = ({ type = 'line' }: SectionSeparatorProps) => {
  switch (type) {
    case 'line-with-padding':
      return <View style={[styles.lineWithPadding]} />;
    case 'rectangle':
      return <View style={[styles.rectangle]} />;
    case 'line':
    default:
      return <View style={[styles.line]} />;
  }
};

const styles = StyleSheet.create({
  lineWithPadding: {
    height: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: semanticColor.border.medium,
  },
  line: {
    height: 1,
    marginVertical: 8,
    backgroundColor: semanticColor.border.medium,
  },
  rectangle: {
    height: 16,
    backgroundColor: semanticColor.surface.gray,
  },
});

export default SectionSeparator;
