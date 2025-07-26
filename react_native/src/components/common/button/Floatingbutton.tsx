import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'
import IconPlus from '@/assets/icons/IconPlus.svg'
import { semanticNumber } from '@/styles/semantic-number'
import { semanticColor } from '@/styles/semantic-color'
import { fonts } from '@/styles/fonts'
import { useState } from 'react'

interface FloatingbuttonProps {
  isContent?: boolean,
  onPress: () => void
}

const Floatingbutton = ({isContent = true, onPress}: FloatingbuttonProps) => {
  const [isPressed, setIsPressed] = useState(true)
  return (
    <Pressable onPress={onPress} onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)} style={[styles.container, {backgroundColor: isPressed ? semanticColor.floating.uploadPressed: semanticColor.floating.uploadEnabled}]}>
      <IconPlus/>
      {isContent && <Text style={styles.text}>등록하기</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        boxSizing: 'content-box',
        alignSelf: 'flex-start',
        gap:2,
        paddingHorizontal: 16,
        paddingVertical: 14,
        position:'absolute',
        right: 16,
        bottom: 95,
        borderRadius: semanticNumber.borderRadius.full,
        borderWidth: semanticNumber.stroke.bold,
        borderColor: semanticColor.floating.uploadBorder,
    },
    text: {
        color: semanticColor.text.brandOnDark,
        fontFamily: fonts.family.semibold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD
    }
})

export default Floatingbutton
