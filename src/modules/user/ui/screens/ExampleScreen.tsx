import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseLayout } from '@components/layout';
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Icon,
  IconButton,
  Margin,
  Text,
  TextInput,
} from '@components/core';
import {
  commonStyles,
  horizontalScale,
  theme,
  verticalScale,
} from '@theme/index';

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
      <Margin top={theme.spacing.md} />

      {/* Cabecera del perfil */}
      <Card>
        <View style={commonStyles.alignCenter}>
          <Avatar source={{ uri: 'https://i.pravatar.cc/300' }} type="card" />
          <Margin top={theme.spacing.md} />
          <Text
            title={name}
            font="headlineMedium"
            align="center"
            color="onSurface"
          />
          <Margin top={theme.spacing.xs} />
          <Text
            title="Desarrollador Mobile"
            font="bodyMedium"
            align="center"
            color="textSecondary"
          />
          {!isEditing && (
            <Margin top={theme.spacing.md}>
              <Button
                title="Editar perfil"
                icon="pencil"
                variant="outline"
                type="secondary"
                onPress={() => setIsEditing(true)}
              />
            </Margin>
          )}
        </View>
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Información personal */}
      <Card title="Información personal" titleColor="onSurface">
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
            />
          </>
        ) : (
          <>
            {/* Email */}
            <Card shadow="md">
              <View style={commonStyles.row}>
                <View style={styles.iconContainer}>
                  <Icon name="email" size={20} color="primary" />
                </View>
                <View style={commonStyles.flex}>
                  <Text
                    title="Correo electrónico"
                    font="labelMedium"
                    color="textSecondary"
                  />
                  <Text title={email} font="bodyMedium" color="onSurface" />
                </View>
              </View>
            </Card>

            <Margin top={theme.spacing.sm} />

            {/* Phone */}
            <Card shadow="md">
              <View style={commonStyles.row}>
                <View style={styles.iconContainer}>
                  <Icon name="phone" size={20} color="primary" />
                </View>
                <View style={commonStyles.flex}>
                  <Text
                    title="Teléfono"
                    font="labelMedium"
                    color="textSecondary"
                  />
                  <Text title={phone} font="bodyMedium" color="onSurface" />
                </View>
              </View>
            </Card>

            <Margin top={theme.spacing.md} />

            {/* Biography */}
            <Text title="Biografía" font="titleSMedium" color="onSurface" />
            <Margin top={theme.spacing.sm} />
            <Card shadow="md">
              <Text title={bio} font="bodyRegular" color="onSurface" />
            </Card>
          </>
        )}
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Preferencias */}
      <Card title="Preferencias" titleColor="onSurface">
        {/* Notificaciones */}
        <Card shadow="md">
          <View>
            <View style={commonStyles.rowWithFlex}>
              <View style={styles.iconContainer}>
                <Icon name="bell" size={20} color="primary" />
              </View>
              <View style={commonStyles.flex}>
                <Text
                  title="Notificaciones push"
                  font="bodyMedium"
                  color="onSurface"
                />
                <Text
                  title="Recibir alertas en tiempo real"
                  font="bodySRegular"
                  color="textSecondary"
                />
              </View>
            </View>
            <Checkbox
              title="Notificaciones push"
              selected={receiveNotifications}
              onChange={setReceiveNotifications}
              color="primary"
            />
          </View>
        </Card>

        <Margin top={theme.spacing.sm} />

        {/* Emails */}
        <Card shadow="md">
          <View>
            <View style={commonStyles.rowWithFlex}>
              <View style={styles.iconContainer}>
                <Icon name="email-outline" size={20} color="primary" />
              </View>
              <View style={commonStyles.flex}>
                <Text
                  title="Correos promocionales"
                  font="bodyMedium"
                  color="onSurface"
                />
                <Text
                  title="Ofertas y novedades por email"
                  font="bodySRegular"
                  color="textSecondary"
                />
              </View>
            </View>
            <Checkbox
              title="Correos promocionales"
              selected={receiveEmails}
              onChange={setReceiveEmails}
              color="primary"
            />
          </View>
        </Card>
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Acciones */}
      <Card title="Acciones" titleColor="onSurface">
        {/* Cambiar contraseña */}

        <View style={commonStyles.rowSpaceBetween}>
          <View style={commonStyles.rowWithFlex}>
            <View style={styles.iconContainerMd}>
              <Icon name="lock-reset" size={20} color="primary" />
            </View>
            <View style={commonStyles.flex}>
              <Text
                title="Cambiar contraseña"
                font="bodyMedium"
                color="onSurface"
              />
              <Text
                title="Actualizar credenciales de acceso"
                font="bodySRegular"
                color="textSecondary"
              />
            </View>
          </View>
          <IconButton icon="chevron-right" onPress={() => {}} size={16} />
        </View>

        <Margin top={theme.spacing.sm} />

        {/* Privacidad */}
        <View style={commonStyles.rowSpaceBetween}>
          <View style={commonStyles.rowWithFlex}>
            <View style={styles.iconContainerMd}>
              <Icon name="shield-account" size={20} color="primary" />
            </View>
            <View style={commonStyles.flex}>
              <Text
                title="Privacidad y seguridad"
                font="bodyMedium"
                color="onSurface"
              />
              <Text
                title="Gestionar datos personales"
                font="bodySRegular"
                color="textSecondary"
              />
            </View>
          </View>
          <IconButton icon="chevron-right" onPress={() => {}} size={16} />
        </View>

        <Margin top={theme.spacing.sm} />

        {/* Cerrar sesión */}
        <Card shadow="md" onPress={() => {}}>
          <View style={commonStyles.rowSpaceBetween}>
            <View style={commonStyles.rowWithFlex}>
              <View style={styles.iconContainerMd}>
                <Icon name="logout" size={20} color="error" />
              </View>
              <View style={commonStyles.flex}>
                <Text title="Cerrar sesión" font="bodyMedium" color="error" />
                <Text
                  title="Salir de la aplicación"
                  font="bodySRegular"
                  color="textSecondary"
                />
              </View>
            </View>
            <IconButton icon="chevron-right" onPress={() => {}} size={16} />
          </View>
        </Card>
      </Card>

      {/* Botones de guardar/cancelar en modo edición */}
      {isEditing && (
        <>
          <Margin top={theme.spacing.md} />
          <View style={commonStyles.row}>
            <View style={commonStyles.flex}>
              <Button
                title="Cancelar"
                variant="outline"
                onPress={() => setIsEditing(false)}
              />
            </View>
            <Margin left={theme.spacing.md} />
            <View style={commonStyles.flex}>
              <Button title="Guardar cambios" onPress={handleSaveProfile} />
            </View>
          </View>
        </>
      )}

      <Margin top={theme.spacing.xxl} />
    </BaseLayout>
  );
}

// Estilos mínimos requeridos - la mayoría se manejan con componentes
// No se requiere StyleSheet.create() adicional

const styles = StyleSheet.create({
  iconContainer: {
    width: horizontalScale(24),
    height: verticalScale(24),
    borderRadius: horizontalScale(20),
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  iconContainerMd: {
    width: horizontalScale(28),
    height: verticalScale(28),
    borderRadius: horizontalScale(20),
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
});
