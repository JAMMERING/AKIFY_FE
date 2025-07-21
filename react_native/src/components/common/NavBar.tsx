import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeIcon from '@assets/icons/IconHomeFilled.svg';
import CompassIcon from '@assets/icons/IconCompassFilled.svg';
import ChatIcon from '@assets/icons/IconMessageCircleFilled.svg';
import UserIcon from '@assets/icons/IconUserFilled.svg';
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
        <HomeIcon fill={selected === 'home' ? semanticColor.icon.primary : semanticColor.icon.lightest} />
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
        <CompassIcon
          fill={selected === 'explore' ? semanticColor.icon.primary : semanticColor.icon.lightest}
          color={selected === 'explore' ? semanticColor.icon.primary : semanticColor.icon.lightest}
        />
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
        <ChatIcon fill={selected === 'chatting' ? semanticColor.icon.primary : semanticColor.icon.lightest} />
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
        <UserIcon fill={selected === 'my' ? semanticColor.text.primary : semanticColor.text.lightest} />
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
