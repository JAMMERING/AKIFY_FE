import NoEntry from '@/assets/icons/noentry.svg';
import RedExclamation from '@/assets/icons/redexclamation.svg';
import Bell from '@/assets/icons/bell.svg';
import Checkmark from '@/assets/icons/checkmark.svg';
import Dove from '@/assets/icons/dove.svg';
import Envelope from '@/assets/icons/envelope.svg';
import WavingHand from '@/assets/icons/wavinghand.svg';
import React from 'react';
import { SvgProps } from 'react-native-svg';

const emojiMap = {
  NoEntry,
  RedExclamation,
  Bell,
  Checkmark,
  Dove,
  Envelope,
  WavingHand,
} as const;

export type EmojiName = keyof typeof emojiMap;

export function isValidEmojiName(name: string): name is EmojiName {
  return name in emojiMap;
}

export function getEmojiComponentByName(name: EmojiName): React.FC<SvgProps> {
  return emojiMap[name];
}

export function renderEmoji(name: string, props?: SvgProps): React.ReactNode {
  if (isValidEmojiName(name)) {
    const Emoji = emojiMap[name];
    return React.createElement(Emoji, props);
  }
  return null;
}
