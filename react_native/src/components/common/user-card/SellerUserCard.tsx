import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NextIcon from '@/assets/icons/IconChevronRight.svg';
import { fonts } from '@/styles/fonts';
import { semanticNumber } from '@/styles/semantic-number';
import { semanticColor } from '@/styles/semantic-color';

type SellerUserCardProps = {
  profileImage: string | null;
  nickname: string;
  onPress: () => void;
};

// 기능 추가 시 수정 필요
function SellerUserCard({ profileImage, nickname, onPress }: SellerUserCardProps) {
  return (
    <TouchableOpacity style={styles.sellerUserCard} onPress={onPress}>
      <View style={styles.profileImageWrapper}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.defaultProfile} />
        )}
      </View>
      <View style={styles.nicknameWrapper}>
        <Text style={styles.nicknameText}>{nickname}</Text>
      </View>
      <View>
        <NextIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sellerUserCard: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: semanticNumber.borderRadius.lg,
    backgroundColor: semanticColor.surface.lightGray,
    width: Dimensions.get('window').width - 32,
  },
  profileImageWrapper: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: semanticNumber.borderRadius.full,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  defaultProfile: {
    width: '100%',
    height: '100%',
    borderRadius: semanticNumber.borderRadius.full,
    backgroundColor: semanticColor.surface.gray,
  },
  nicknameWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  nicknameText: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.MD,
  },
});

export default SellerUserCard;
