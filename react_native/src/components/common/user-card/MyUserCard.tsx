import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MyUserCardProps = {
  profileImage: string | null;
  nickname: string;
  userId: string;
};

// 버튼 컴포넌트 merge 후 수정 예정
function MyUserCard({ profileImage, nickname, userId }: MyUserCardProps) {
  return (
    <View style={styles.myUserCard}>
      <View style={styles.userInfoWrapper}>
        <View style={styles.profileImageWrapper}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.defaultProfile} />
          )}
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.nicknameText}>{nickname}</Text>
          <Text style={styles.userIdText}>{userId}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text>버튼</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  myUserCard: {
    paddingHorizontal: 16,
    paddingTop: 24,
    gap: semanticNumber.spacing[12],
    width: Dimensions.get('window').width - 32,
    borderRadius: semanticNumber.borderRadius.lg,
  },
  userInfoWrapper: {
    flexDirection: 'row',
  },
  profileImageWrapper: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
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
  textWrapper: {
    marginLeft: 8,
  },
  nicknameText: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size['2XL'],
    lineHeight: fonts.lineHeight['2XL'],
    letterSpacing: fonts.letterSpacing.none,
    color: semanticColor.text.primary,
  },
  userIdText: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size['2XS'],
    lineHeight: fonts.lineHeight['2XS'],
    letterSpacing: fonts.letterSpacing.none,
    color: semanticColor.text.tertiary,
  },
});

export default MyUserCard;
