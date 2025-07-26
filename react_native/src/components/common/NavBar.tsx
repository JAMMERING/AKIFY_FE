import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeIcon from '@assets/icons/IconHomeFilled.svg';
import CompassIcon from '@assets/icons/IconCompassFilled.svg';
import ChatIcon from '@assets/icons/IconMessageCircleFilled.svg';
import UserIcon from '@assets/icons/IconUserFilled.svg';
import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { useState } from 'react';
import { SvgProps } from 'react-native-svg';

type TabType = 'home' | 'explore' | 'chatting' | 'my';

const tabs: { key: TabType; label: string; Icon: React.FC<SvgProps> }[] = [
  { key: 'home', label: '홈', Icon: HomeIcon },
  { key: 'explore', label: '둘러보기', Icon: CompassIcon },
  { key: 'chatting', label: '채팅', Icon: ChatIcon },
  { key: 'my', label: '마이', Icon: UserIcon },
];

// 페이지 만들어지고 Navigation 구현 후 onPress 수정
function NavBar() {
  const [selected, setSelected] = useState<TabType>('home');

  return (
    <View style={styles.navBarWrapper}>
      {tabs.map(({ key, label, Icon }) => {
        const isSelected = selected === key;
        const iconColor = isSelected ? semanticColor.icon.primary : semanticColor.icon.lightest;
        const textColor = isSelected ? semanticColor.text.primary : semanticColor.text.lightest;

        return (
          <TouchableOpacity key={key} style={styles.buttonWrapper} onPress={() => setSelected(key)}>
            <Icon fill={iconColor} color={iconColor} />
            <Text style={[styles.text, { color: textColor }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
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
