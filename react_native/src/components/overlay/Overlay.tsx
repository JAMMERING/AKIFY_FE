import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';

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
    backgroundColor: 'var(--surface-alpha-black-light, rgba(0, 0, 0, 0.25))',

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overlay;
