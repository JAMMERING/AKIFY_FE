import { StyleSheet, Text, View } from "react-native"
import IconMenuDeep from '@/assets/icons/IconMenuDeep.svg'
import { semanticColor } from "@/styles/semantic-color"
import { fonts } from "@/styles/fonts"

interface ProductListBarProps {
    count: number
}

const ProductListBar = ({count}:ProductListBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}개의 매물</Text>
      <View style={styles.filterContainer}><Text style={styles.filterText}>최신 순</Text><IconMenuDeep fill='#696B6F'/></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 12,
    },
    text: {
        color: semanticColor.text.tertiary,
        fontSize:fonts.size["2XS"],
        fontFamily: fonts.family.regular,
        lineHeight: fonts.lineHeight["2XS"]
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    filterText: {
        color: semanticColor.text.secondary,
        fontFamily: fonts.family.medium,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS
    }
})

export default ProductListBar
