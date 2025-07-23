import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { semanticColor } from '@/styles/semantic-color';

interface OverlayProps {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Overlay = ({
    visible,
    onClose,
    children,
}: OverlayProps) => {
=======
const Overlay: React.FC<OverlayProps> = ({
    visible,
    onClose,
    children,
}) => {
>>>>>>> ae18871 ([feat] overlay component)
=======
const Overlay = ({
    visible,
    onClose,
    children,
}: OverlayProps) => {
>>>>>>> 292f1d5 ([style] review 반영)
    return (
        <Modal
            transparent
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.container}>
                {children}
            </View>
        </Modal>
    );
}; 
=======
=======
>>>>>>> 9aa4b22 (style: refactory prettier)
const Overlay = ({ visible, onClose, children }: OverlayProps) => {
  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};
<<<<<<< HEAD
>>>>>>> c4367bb (style: prettier 적용)
=======
>>>>>>> 9aa4b22 (style: refactory prettier)

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: semanticColor.overlay.black25,
=======
    backgroundColor: 'var(--surface-alpha-black-light, rgba(0, 0, 0, 0.25))',

>>>>>>> 9aa4b22 (style: refactory prettier)
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overlay;
