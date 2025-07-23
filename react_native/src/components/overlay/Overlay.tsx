import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';

interface OverlayProps {
    visible: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'var(--surface-alpha-black-light, rgba(0, 0, 0, 0.25))',

        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Overlay;