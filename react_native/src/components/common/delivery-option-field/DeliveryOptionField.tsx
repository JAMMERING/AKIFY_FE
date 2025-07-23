import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import AlertCircle from '@/assets/icons/AlertCircle.svg';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { fonts } from '@/styles/fonts';

interface DeliveryOptionFieldProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	label?: string;
}

const DeliveryOptionField: React.FC<DeliveryOptionFieldProps> = ({
	value,
	onChange,
	placeholder = '100~50,000',
	label = '배송비',
}) => {
const isError = Number(value) < 100 || Number(value) > 50000 || value === '';
const errorText = ()=>{
    return Number(value) < 100 ? '100원보다 높은 금액으로 설정해 주세요' : '50,000원보다 낮은 금액으로 설정해 주세요';
}
return (
    <View style={styles.column}>
		<View style={[styles.container,isError? borderStyle.error : borderStyle.default]}>
			<Text style={[styles.label,isError? textStyle.error : textStyle.default]}>{label}</Text>
            <View style={styles.DeliveryOptionGroup}>
			<TextInput
				style={[styles.value,isError? textStyle.error : textStyle.default]}
				value={value}
				onChangeText={onChange}
				placeholder={placeholder}
				keyboardType="numeric"
			/>
            <Text style={[styles.currency,isError? textStyle.error : textStyle.default]}>원</Text>
            </View>
		</View>
        {isError && (
            <View style={styles.caption}>
                <AlertCircle width={16} height={16} />
                <Text style={styles.captionText}>{errorText()}</Text>
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
  },
  label:{
    fontFamily: fonts.family.semibold,
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0,
  },
  DeliveryOptionGroup:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    columnGap: semanticNumber.spacing[4],
  },
  value:{
    textAlign: 'right',
    fontFamily: fonts.family.bold,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
  },
  currency:{
    fontFamily: fonts.family.regular,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
  },
  caption:{
    flexDirection: 'row',
    columnGap: semanticNumber.spacing[4],
    justifyContent: 'flex-start',
    alignItems: 'center',
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
        borderWidth: 1.5,
        borderColor: semanticColor.text.critical,
    },
});

const textStyle = StyleSheet.create({
    default:{
        color: semanticColor.text.secondary,

    },
    error:{
            color: semanticColor.text.critical,

    },
});
export default DeliveryOptionField;