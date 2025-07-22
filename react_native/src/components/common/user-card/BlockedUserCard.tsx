import { fonts } from '@/styles/fonts';
import { semanticColor } from '@/styles/semantic-color';
import { semanticNumber } from '@/styles/semantic-number';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type BlockedUserCardProps = {
  profileImage: string | null;
  nickname: string;
  userId: string;
  blockedUserDate: string;
};

function BlockedUserCard({ profileImage, nickname, userId, blockedUserDate }: BlockedUserCardProps) {
  return (
    <View style={styles.blockedUserCard}>
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
          <Text style={styles.blockedUserDateText}>차단한 날짜: {blockedUserDate}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text>차단 해제</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  blockedUserCard: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: Dimensions.get('window').width - 32,
    gap: semanticNumber.spacing[12],
    borderRadius: semanticNumber.borderRadius.lg,
  },
  userInfoWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  textWrapper: {
    marginLeft: 8,
  },
  nicknameText: {
    fontFamily: fonts.family.semibold,
    fontSize: fonts.size.MD,
    lineHeight: fonts.lineHeight.MD,
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
  blockedUserDateText: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size['4XS'],
    lineHeight: fonts.lineHeight['4XS'],
    letterSpacing: fonts.letterSpacing.none,
    color: semanticColor.text.lightest,
  },
});

export default BlockedUserCard;
