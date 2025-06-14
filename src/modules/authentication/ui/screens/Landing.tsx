import React from 'react';
import { View, StyleSheet } from 'react-native';
// Components
import { Button, Margin, Text } from '@components/core';
// Hooks
import { useNavigationPublic } from '@modules/navigation/ui/PublicRoutes';
import { PublicRoutes } from '@modules/navigation/domain/model';
import { BaseLayout } from '@components/layout';

export default function LandingScreen() {
  const { navigate } = useNavigationPublic();

  return (
    <BaseLayout>
      <View style={styles.top}>
        <Text title="Lose Yourself" font="displayMedium" />
        <Text title="In the beat" font="displayRegular" />
      </View>
      <Margin bottom={20}>
        <Button
          title="Sign In"
          onPress={() => navigate(PublicRoutes.SignIn)}
          type="secondary"
          icon="login"
        />
      </Margin>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
