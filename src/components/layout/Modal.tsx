import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  View,
  Modal as RNModal,
  TouchableOpacity,
} from 'react-native';

import { SPACING, theme } from '@theme/index';
import { Icon, Margin, Text } from '@components/core';

interface ModalProps {
  visible: boolean;
  onRequestClose?: () => void;
  title?: string;
  onPressIcon?: () => void;
  icon?: string;
}

export default function Modal({
  visible,
  onRequestClose,
  children,
  title,
  onPressIcon,
  icon,
}: PropsWithChildren<ModalProps>) {
  return (
    <RNModal
      animationType="fade"
      presentationStyle="overFullScreen"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      statusBarTranslucent
    >
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.row}>
            {icon && (
              <Margin right={SPACING.xs}>
                <TouchableOpacity onPress={onPressIcon}>
                  <Icon name={icon} />
                </TouchableOpacity>
              </Margin>
            )}
            {title && <Text title={title} font="bodyMedium" align="center" />}
          </View>

          <Margin top={12} />
          {children}
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
