import React from 'react';
import { View } from 'react-native';
import { Text, Avatar, Margin, Button } from '@components/core';
import { BaseLayout } from '@components/layout';
import { useUserStorage } from '@modules/user/infrastructure/user-local.storage';
import { useMutationSignOut } from '@modules/authentication/application/mutations';
import { commonStyles } from '@theme/index';

export default function ProfileScreen() {
  const user = useUserStorage(state => state.user);
  const { mutateAsync: signOut, isPending } = useMutationSignOut();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <BaseLayout>
      <View style={[commonStyles.centerContainer, commonStyles.flex]}>
        <Avatar
          {...(user.imageUrl && { source: { uri: user.imageUrl } })}
          size={100}
        />
      </View>
      <Margin top={20} />
      <Text font="headlineSMedium" align="center">
        {user.name || user.email}
      </Text>
      <Margin top={10} />
      <Text font="titleSRegular" align="center">
        {user.email}
      </Text>
      <Margin top={30} />
      <Margin top={30} />
      <Margin top={30} />
      <Button
        title={isPending ? 'Saliendo...' : 'Cerrar Sesión'}
        onPress={handleSignOut}
        type="primary"
        isLoading={isPending}
        icon="logout"
      />
      <Margin top={30} />
    </BaseLayout>
  );
}
