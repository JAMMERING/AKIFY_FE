import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import AlertCircle from '@/assets/icons/AlertCircle.svg';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { fonts } from '@/styles/fonts';

interface PriceFieldProps {
	value: string;
    maxValue: number;
	onChange: (value: string) => void;
	placeholder?: string;
	label?: string;

}

const PriceField: React.FC<PriceFieldProps> = ({
	value,
    maxValue,
	onChange,
	placeholder = '0',
	label = '가격',
}) => {
const isError = Number(value) < maxValue && Number(value) != 0;	
return (
    <View style={styles.column}>
		<View style={[styles.container,isError? borderStyle.error : borderStyle.default]}>
			<Text style={styles.label}>{label}</Text>
            <View style={styles.priceGroup}>
			<TextInput
				style={styles.value}
				value={value}
				onChangeText={onChange}
				placeholder={placeholder}
				keyboardType="numeric"
			/>
            <Text style={styles.currency}>원</Text>
            </View>
		</View>
        {isError && (
            <View style={styles.caption}>
                <AlertCircle width={16} height={16} />
                <Text style={styles.captionText}>{maxValue}원 이하로 입력해주세요.</Text>
            </View>
        )}
        </View>
	);
};

const styles = StyleSheet.create({
    column: {
        width: '100%',
        rowGap: semanticNumber.spacing[4],
    },
	container: {
        flexDirection: 'row',
        width: 358,
        paddingVertical: semanticNumber.spacing[12],
        paddingHorizontal: semanticNumber.spacing[16],
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: semanticNumber.borderRadius.lg,
        backgroundColor: semanticColor.surface.white,
  },
  label:{
    color: semanticColor.text.primary,
    fontFamily: fonts.family.semibold,
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0,
  },
  priceGroup:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    columnGap: semanticNumber.spacing[4],
  },
  value:{
    color: semanticColor.text.secondary,
    textAlign: 'right',
    fontFamily: fonts.family.bold,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
  },
  currency:{
    color: semanticColor.text.secondary,
    fontFamily: fonts.family.regular,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
  },
  caption:{
    flexDirection: 'row',
    rowGap: semanticNumber.spacing[4],
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexShrink: 0,
  },
    captionText:{
    color: semanticColor.text.critical,
    fontFamily: fonts.family.regular,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: semanticNumber.spacing.none,
    },

});
const borderStyle = StyleSheet.create({
	default: {
		borderWidth: 0,
	},
    error: {
        borderWidth: 1,
        borderColor: semanticColor.text.critical,
    },
});

export default PriceField;