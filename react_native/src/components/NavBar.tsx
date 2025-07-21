import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeIconOn from '@/assets/IconHomeOn.svg';
import HomeIconOff from '@/assets/IconHomeOff.svg';
import CompassIconOn from '@/assets/IconCompassOn.svg';
import CompassIconOff from '@/assets/IconCompassOff.svg';
import ChatIconOn from '@/assets/IconChatOn.svg';
import ChatIconOff from '@/assets/IconChatOff.svg';
import UserIconOn from '@/assets/IconUserOn.svg';
import UserIconOff from '@/assets/IconUserOff.svg';
import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { useState } from 'react';

type TabType = 'home' | 'explore' | 'chatting' | 'my';

// 페이지 만들어지고 Navigation 구현 후 onPress 수정
function NavBar() {
  const [selected, setSelected] = useState<TabType>('home');

  return (
    <View style={styles.navBarWrapper}>
      <TouchableOpacity style={styles.buttonWrapper} onPress={() => setSelected('home')}>
        {selected === 'home' ? <HomeIconOn /> : <HomeIconOff />}
        <Text
          style={[
            styles.text,
            {
              color: selected === 'home' ? semanticColor.text.primary : semanticColor.text.lightest,
            },
          ]}>
          홈
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper} onPress={() => setSelected('explore')}>
        {selected === 'explore' ? <CompassIconOn /> : <CompassIconOff />}
        <Text
          style={[
            styles.text,
            {
              color: selected === 'explore' ? semanticColor.text.primary : semanticColor.text.lightest,
            },
          ]}>
          둘러보기
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper} onPress={() => setSelected('chatting')}>
        {selected === 'chatting' ? <ChatIconOn /> : <ChatIconOff />}
        <Text
          style={[
            styles.text,
            {
              color: selected === 'chatting' ? semanticColor.text.primary : semanticColor.text.lightest,
            },
          ]}>
          채팅
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper} onPress={() => setSelected('my')}>
        {selected === 'my' ? <UserIconOn /> : <UserIconOff />}
        <Text
          style={[
            styles.text,
            {
              color: selected === 'my' ? semanticColor.text.primary : semanticColor.text.lightest,
            },
          ]}>
          마이
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingTop: 5,
    paddingBottom: 32,
  },
  buttonWrapper: {
    alignItems: 'center',
    width: 44,
  },
  text: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size['3XS'],
    lineHeight: fonts.lineHeight['2XS'],
    letterSpacing: fonts.letterSpacing.none,
    color: semanticColor.text.lightest,
  },
});

export default NavBar;
