import JailMonkey from 'jail-monkey';
import { SafeAreaView } from 'react-native';
import React, { PropsWithChildren } from 'react';
// Components
import { Text } from '@components/core';

export default function SecureContainer({ children }: PropsWithChildren) {
  if (JailMonkey.isJailBroken()) {
    return (
      <SafeAreaView>
        <Text>
          Devices is rooted. This application do not work on rooted devices.
        </Text>
      </SafeAreaView>
    );
  }
  return <>{children}</>;
}
