import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Arrow_down from '@/assets/icons/arrow_down.svg'; 
// import Arrow_up from '@/assets/icons/arrow_up.svg';
type DropDownProps<T> = {
    placeholder: string;
    title: string;
};

function DropDown<T>({
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
                {/* <Arrow_down/> */}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { 
        width: 358,
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
     },
    title: {
        color: '#1E1E1F',
        fontFamily: 'Pretendard',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0,
    },
    selector: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
    },
    selectedText: {
        color: '#1E1E1F',
        fontFamily: 'Pretendard',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        letterSpacing: 0,
    },

});

export default DropDown;