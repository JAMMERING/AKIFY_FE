import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { semanticColor } from '@/styles/semantic-color';

interface OverlayProps {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Overlay = ({ visible, onClose, children }: OverlayProps) => {
  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semanticColor.overlay.black25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overlay;
