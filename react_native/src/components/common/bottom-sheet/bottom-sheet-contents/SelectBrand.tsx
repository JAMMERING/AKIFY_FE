import React,{useState} from 'react';
import { View, Text, StyleSheet,ScrollView, Pressable } from 'react-native';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { fonts } from '@/styles/fonts';
import Selected from '@/assets/icons/Selected.svg';
import UnSelected from '@/assets/icons/UnSelected.svg';

type Brand = {
  name: string;
  isSelected: boolean;
};
const SelectBrand = () => {
    const [brandList, setBrandList] = useState<Brand[]>([
        { name: '1981 Inventions', isSelected: false },
        { name: '29 Pedals', isSelected: false },
        { name: '3Degrees Audio', isSelected: false },
        { name: '3Leaf Audio', isSelected: false },
        { name: '3rd Power', isSelected: false },
        { name: 'A/DA', isSelected: false },
        { name: 'A3 Stompbox', isSelected: false },
        { name: 'AA', isSelected: false },
        { name: 'AC Noises', isSelected: false },
        { name: 'AMT', isSelected: false },
        { name: 'API', isSelected: false },
        { name: 'AVTPedals', isSelected: false },
        { name: 'Abasi', isSelected: false },
        { name: 'Aclam', isSelected: false },
    ]);
    const handleClick = (index: number) => {
        setBrandList((prev) => {
            const newList = [...prev];
            newList[index].isSelected = !newList[index].isSelected;
            return newList;
        });
    };
    return (
        <View style={styles.container}>
            {/* 검색 UI */}
            <ScrollView>
            {brandList.map((brand, index) => (
                <Pressable key={index} style={styles.brandItem} onPress={() => handleClick(index)}>
                    {brand.isSelected ? (
                        <Selected />
                    ) : (
                        <UnSelected />
                    )}
                    <Text style={styles.brandItemText}>{brand.name}</Text>
                </Pressable>
            ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    width: 390,
    alignItems: 'flex-start',
    // rowGap: semanticNumber.spacing[16],
    },
    brandItem: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: semanticNumber.spacing[28],
    },
    brandItemText: {
    color: semanticColor.text.secondary,
    fontFamily: fonts.family.regular,
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: semanticNumber.spacing.none,
    },
  
});

export default SelectBrand;