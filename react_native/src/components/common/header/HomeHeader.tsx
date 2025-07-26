import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeHeaderLogoSvg from '@assets/icons/HomeHeaderLogo.svg';
import SearchIcon from '@assets/icons/IconSearch.svg';
import BellIcon from '@assets/icons/IconBell.svg';

// 현재 홈 화면 외에는 쓰이는 곳 없음
// 알림과 검색 페이지 제작 완료 후 onPress 각각 추가 예정
function HomeHeader() {
  return (
    <View style={styles.homeHeader}>
      <HomeHeaderLogoSvg style={styles.homeHeaderLogo} />
      <View style={styles.iconWrapper}>
        <TouchableOpacity style={styles.iconButtonWrapper} onPress={() => Alert.alert('알림', '알림')}>
          <BellIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButtonWrapper} onPress={() => Alert.alert('검색', '검색')}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  homeHeaderLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 92,
    height: 20,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  iconButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 44,
    height: 44,
  },
});

export default HomeHeader;
