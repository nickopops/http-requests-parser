import { useState, useImperativeHandle, type RefObject } from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

export type LoadingOverlayRef = { show: () => void; hide: () => void };

type Props = { loadingOverlayRef: RefObject<LoadingOverlayRef> };

export const LoadingOverlay = ({ loadingOverlayRef }: Props) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(loadingOverlayRef, () => ({
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }));

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
