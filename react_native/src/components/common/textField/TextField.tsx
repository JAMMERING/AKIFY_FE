import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import IconAlertCircle from '@/assets/IconAlertCircle.svg';
import IconCheck from '@/assets/IconCheck.svg';

interface TextFieldProps {
  label: string;
  placeholder: string;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  isVaild?: boolean;
  validState?: boolean;
  validText?: string;
}

const TextField = ({
  label,
  placeholder,
  inputText,
  setInputText,
  isVaild,
  validState,
  validText,
}: TextFieldProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          {
            color:
              !isVaild || validState
                ? semanticColor.text.secondary
                : semanticColor.text.critical,
          },
        ]}
      >
        {label}
      </Text>
      <TextInput
        value={inputText}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={semanticColor.text.tertiary}
        onChangeText={setInputText}
      />
      {isVaild && (
        <View style={styles.validContainer}>
          {validState ? <IconCheck /> : <IconAlertCircle />}
          <Text
            style={[
              styles.validText,
              {
                color: validState
                  ? semanticColor.text.success
                  : semanticColor.text.critical,
              },
            ]}
          >
            {validText}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: semanticNumber.spacing[8],
  },
  label: {
    color: semanticColor.text.secondary,
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.MD,
    lineHeight: fonts.lineHeight.MD,
  },
  input: {
    height: 52,
    paddingHorizontal: semanticNumber.spacing[16],
    borderRadius: semanticNumber.borderRadius.lg,
    borderWidth: semanticNumber.stroke.medium,
    borderColor: semanticColor.border.light,
    backgroundColor: semanticColor.surface.white,
    color: semanticColor.text.primary,
    //fontFamily: fonts.family.regular,
    fontSize: fonts.size.MD,
    lineHeight: fonts.lineHeight.MD,
  },
  validContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: semanticNumber.spacing[4],
  },
  validText: {
    color: semanticColor.text.critical,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size['2XS'],
    lineHeight: fonts.lineHeight['2XS'],
  },
});

export default TextField;
