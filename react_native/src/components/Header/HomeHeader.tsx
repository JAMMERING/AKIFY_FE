import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeHeaderLogoSvg from '@/assets/HomeHeaderLogo.svg';
import SearchIcon from '@/assets/IconSearch.svg';
import BellIcon from '@/assets/IconBell.svg';

// 현재 홈 화면 외에는 쓰이는 곳 없음
// 알림과 검색 페이지 제작 완료 후 onPress 각각 추가 예정
function HomeHeader() {
  return (
    <View style={styles.HomeHeader}>
      <HomeHeaderLogoSvg style={styles.HomeHeaderLogo} />
      <View style={styles.IconWrapper}>
        <TouchableOpacity
          style={styles.IconButtonWrapper}
          onPress={() => Alert.alert('알림', '알림')}
        >
          <BellIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.IconButtonWrapper}
          onPress={() => Alert.alert('검색', '검색')}
        >
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HomeHeaderLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 92,
    height: 20,
  },
  IconWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  IconButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 44,
    height: 44,
  },
});

export default HomeHeader;
