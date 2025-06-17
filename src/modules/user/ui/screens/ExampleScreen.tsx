import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { BaseLayout } from '@components/layout';
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Icon,
  Margin,
  Text,
  TextInput,
} from '@components/core';
import { theme } from '@theme/index';

/**
 * Pantalla de perfil de usuario que muestra información personal
 * y permite editar los datos del perfil
 */
export default function ExampleScreen() {
  // Estados para los datos del perfil
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Carlos Rodríguez');
  const [email, setEmail] = useState('carlos.rodriguez@example.com');
  const [phone, setPhone] = useState('+34 612 345 678');
  const [bio, setBio] = useState(
    'Desarrollador de aplicaciones móviles con experiencia en React Native y Flutter. Apasionado por la arquitectura limpia y el diseño de interfaces de usuario.',
  );
  const [receiveNotifications, setReceiveNotifications] = useState(true);
  const [receiveEmails, setReceiveEmails] = useState(false);

  // Función para guardar los cambios
  const handleSaveProfile = () => {
    // Aquí iría la lógica para guardar los cambios en el backend
    setIsEditing(false);
  };

  return (
    <BaseLayout scrollable>
      {/* Cabecera del perfil */}
      <View style={styles.header}>
        <Avatar
          size={100}
          source={{ uri: 'https://i.pravatar.cc/300' }}
          //type="circle"
        />
        <Margin top={theme.spacing.md} />
        <Text title={name} font="headlineMedium" align="center" />
        {!isEditing && (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Icon name="pencil" size={16} color="primary" />
            <Margin left={theme.spacing.xs} />
            <Text title="Editar perfil" font="labelMedium" color="primary" />
          </TouchableOpacity>
        )}
      </View>

      <Margin top={theme.spacing.md} />

      {/* Información personal */}
      <Card title="Información personal">
        {isEditing ? (
          <>
            <TextInput
              label="Nombre completo"
              value={name}
              onChangeText={setName}
              iconLeft="account"
            />
            <Margin top={theme.spacing.sm} />
            <TextInput
              label="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              iconLeft="email"
              keyboardType="email-address"
            />
            <Margin top={theme.spacing.sm} />
            <TextInput
              label="Teléfono"
              value={phone}
              onChangeText={setPhone}
              iconLeft="phone"
              keyboardType="phone-pad"
            />
            <Margin top={theme.spacing.sm} />
            <TextInput
              label="Biografía"
              value={bio}
              onChangeText={setBio}
              multiline
              numberOfLines={4}
              style={styles.bioInput}
            />
          </>
        ) : (
          <>
            <View style={styles.infoRow}>
              <Icon name="email" size={20} color="secondary" />
              <Margin left={theme.spacing.sm} />
              <Text title={email} font="bodyMedium" />
            </View>
            <Margin top={theme.spacing.sm} />
            <View style={styles.infoRow}>
              <Icon name="phone" size={20} color="secondary" />
              <Margin left={theme.spacing.sm} />
              <Text title={phone} font="bodyMedium" />
            </View>
            <Margin top={theme.spacing.md} />
            <Text title="Biografía" font="titleSMedium" />
            <Margin top={theme.spacing.xs} />
            <Text title={bio} font="bodyRegular" />
          </>
        )}
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Preferencias */}
      <Card title="Preferencias de notificaciones">
        <Checkbox
          title="Recibir notificaciones push"
          selected={receiveNotifications}
          onChange={setReceiveNotifications}
          color="primary"
        />
        <Margin top={theme.spacing.sm} />
        <Checkbox
          title="Recibir correos electrónicos promocionales"
          selected={receiveEmails}
          onChange={setReceiveEmails}
          color="primary"
        />
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Acciones */}
      <Card>
        <Button
          title="Cambiar contraseña"
          type="outline"
          onPress={() => {}}
          icon="lock-reset"
          iconPosition="left"
        />
        <Margin top={theme.spacing.md} />
        <Button
          title="Cerrar sesión"
          type="secondary"
          onPress={() => {}}
          icon="logout"
          iconPosition="left"
        />
      </Card>

      {/* Botones de guardar/cancelar en modo edición */}
      {isEditing && (
        <>
          <Margin top={theme.spacing.md} />
          <View style={styles.actionButtons}>
            <Button
              title="Cancelar"
              type="outline"
              onPress={() => setIsEditing(false)}
              style={styles.actionButton}
            />
            <Margin left={theme.spacing.md} />
            <Button
              title="Guardar cambios"
              onPress={handleSaveProfile}
              style={styles.actionButton}
            />
          </View>
        </>
      )}

      <Margin top={theme.spacing.xxl} />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.xs,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButton: {
    flex: 1,
  },
});
