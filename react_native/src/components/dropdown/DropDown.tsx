import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Arrow_down from '@/assets/icons/arrow_down.svg'; 
import Arrow_up from '@/assets/icons/arrow_up.svg';
import Plus from '@/assets/icons/plus.svg';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { fonts } from '@/styles/fonts';

type DropDownProps<T> = {
    isSelected?: boolean;
    isPlused?: boolean;
    placeholder: string;
    title: string;
};

function DropDown<T>({
    isSelected = false,
    isPlused = false,
    title,
    placeholder = 'Select an option',
}: DropDownProps<T>) {

    return (
        <TouchableOpacity style={styles.container} >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.selector}>
                <Text style={styles.selectedText}>
                    {placeholder}
                </Text>
                {isSelected && !isPlused ? <Arrow_up /> : <Arrow_down />}
                {isSelected && isPlused && <Plus />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { 
        width: 358,
        flexDirection: 'row',
        paddingVertical: semanticNumber.spacing[14],
    paddingHorizontal: semanticNumber.spacing[16],
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: semanticColor.surface.white,
     },
    title: {
        color: semanticColor.text.primary,
        fontFamily: fonts.family.semibold,
        fontSize: 17,
        lineHeight: semanticNumber.spacing[24],
        letterSpacing: 0,
    },
    selector: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
    },
    selectedText: {
        color: semanticColor.text.primary,
        fontFamily: fonts.family.medium,
        fontSize: 15,
        lineHeight: semanticNumber.spacing[22],
        letterSpacing: 0,
    },

});

export default DropDown;