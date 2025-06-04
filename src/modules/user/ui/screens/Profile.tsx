import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Margin, Button } from '@components/core';
import { BaseLayout } from '@components/layout';
import { useUserStorage } from '@modules/user/infrastructure/user-local.storage';
import { useMutationSignOut } from '@modules/authentication/application/mutations';
import { commonStyles } from '@theme/index';

export default function ProfileScreen() {
  const [ipData, setIpData] = useState<any>(null);
  const [loadingIpData, setLoadingIpData] = useState(true);

  const { user } = useUserStorage();
  const { mutateAsync: signOut, isPending } = useMutationSignOut();

  const handleSignOut = async () => {
    await signOut();
  };

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        setLoadingIpData(true);
        const response = await fetch('https://ip-api.com/json', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        console.log('Status Code: ', response.status, response.statusText);

        const data = await response.json();
        console.log('IP data: ', data);

        setIpData(data);
      } catch (error) {
        console.log('Error fetching IP data: ', error);
        // Considerar mostrar un mensaje de error al usuario
      } finally {
        setLoadingIpData(false);
      }
    };

    fetchIpData();
  }, []);

  return (
    <BaseLayout style={styles.container}>
      <View style={commonStyles.centerContainer}>
        <Avatar
          {...(user.imageUrl && { source: { uri: user.imageUrl } })}
          size={100}
        />
        <Margin top={20} />
        <Text font="h2Medium">{user.name || user.email}</Text>
        <Margin top={10} />
        <Text font="bodyMRegular">{user.email}</Text>
      </View>
      <Margin top={30} />
      {loadingIpData ? (
        <Text>Cargando información de IP...</Text>
      ) : ipData ? (
        <View>
          <Text font="h3Medium">Información de IP:</Text>
          <Text>País: {JSON.stringify(ipData)}</Text>
        </View>
      ) : (
        <Text>No se pudo cargar la información de IP.</Text>
      )}
      <Margin top={30} />
      <Margin top={30} />
      <Button
        title={isPending ? 'Saliendo...' : 'Cerrar Sesión'}
        onPress={handleSignOut}
        type="primary"
        isLoading={isPending}
      />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
