import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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
      <Margin top={theme.spacing.md} />
      {/* Cabecera del perfil */}
      <Card>
        <View style={[styles.header, styles.headerCard]}>
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
            color="onSurfaceVariant"
          />
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
      </Card>

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
            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <View style={styles.iconContainer}>
                  <Icon name="email" size={20} color="primary" />
                </View>
                <View style={styles.infoContent}>
                  <Text
                    title="Correo electrónico"
                    font="labelMedium"
                    color="onSurfaceVariant"
                  />
                  <Text title={email} font="bodyMedium" color="onSurface" />
                </View>
              </View>
              <Margin top={theme.spacing.md} />
              <View style={styles.infoRow}>
                <View style={styles.iconContainer}>
                  <Icon name="phone" size={20} color="primary" />
                </View>
                <View style={styles.infoContent}>
                  <Text
                    title="Teléfono"
                    font="labelMedium"
                    color="onSurfaceVariant"
                  />
                  <Text title={phone} font="bodyMedium" color="onSurface" />
                </View>
              </View>
            </View>
            <Margin top={theme.spacing.lg} />
            <View style={styles.bioSection}>
              <Text title="Biografía" font="titleSMedium" color="onSurface" />
              <Margin top={theme.spacing.sm} />
              <View style={styles.bioContainer}>
                <Text title={bio} font="bodyRegular" color="onSurfaceVariant" />
              </View>
            </View>
          </>
        )}
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Preferencias */}
      <Card title="Preferencias" titleColor="onSurface">
        <View style={styles.preferencesSection}>
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceContent}>
              <Icon name="bell" size={20} color="primary" />
              <Margin left={theme.spacing.sm} />
              <View style={styles.preferenceText}>
                <Text
                  title="Notificaciones push"
                  font="bodyMedium"
                  color="onSurface"
                />
                <Text
                  title="Recibir alertas en tiempo real"
                  font="bodySRegular"
                  color="onSurfaceVariant"
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
          <Margin top={theme.spacing.md} />
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceContent}>
              <Icon name="email-outline" size={20} color="primary" />
              <Margin left={theme.spacing.sm} />
              <View style={styles.preferenceText}>
                <Text
                  title="Correos promocionales"
                  font="bodyMedium"
                  color="onSurface"
                />
                <Text
                  title="Ofertas y novedades por email"
                  font="bodySRegular"
                  color="onSurfaceVariant"
                />
              </View>
            </View>
            <Checkbox
              title="Modo oscuro"
              selected={receiveEmails}
              onChange={setReceiveEmails}
              color="primary"
            />
          </View>
        </View>
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Acciones */}
      <Card title="Acciones">
        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionContent}>
              <View style={styles.actionIconContainer}>
                <Icon name="lock-reset" size={20} color="primary" />
              </View>
              <View style={styles.actionText}>
                <Text
                  title="Cambiar contraseña"
                  font="bodyMedium"
                  color="onSurface"
                />
                <Text
                  title="Actualizar credenciales de acceso"
                  font="bodySRegular"
                  color="onSurfaceVariant"
                />
              </View>
            </View>
            <IconButton
              icon="chevron-right"
              onPress={() => {}}
              type="surface"
              size={16}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionContent}>
              <View style={styles.actionIconContainer}>
                <Icon name="shield-account" size={20} color="primary" />
              </View>
              <View style={styles.actionText}>
                <Text
                  title="Privacidad y seguridad"
                  font="bodyMedium"
                  color="onSurface"
                />
                <Text
                  title="Gestionar datos personales"
                  font="bodySRegular"
                  color="onSurfaceVariant"
                />
              </View>
            </View>
            <IconButton
              icon="chevron-right"
              onPress={() => {}}
              type="surface"
              size={16}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionContent}>
              <View
                style={[styles.actionIconContainer, styles.logoutIconContainer]}
              >
                <Icon name="logout" size={20} color="error" />
              </View>
              <View style={styles.actionText}>
                <Text title="Cerrar sesión" font="bodyMedium" color="error" />
                <Text
                  title="Salir de la aplicación"
                  font="bodySRegular"
                  color="onSurfaceVariant"
                />
              </View>
            </View>
            <IconButton
              icon="chevron-right"
              onPress={() => {}}
              type="surface"
              size={16}
            />
          </TouchableOpacity>
        </View>
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
  headerCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.spacing.lg,
    padding: theme.spacing.lg,
  },
  header: {
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.colors.primaryContainer,
  },
  infoSection: {
    marginVertical: theme.spacing.xs,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  infoContent: {
    flex: 1,
    justifyContent: 'center',
  },
  bioSection: {
    marginTop: theme.spacing.sm,
  },
  bioContainer: {
    backgroundColor: theme.colors.surfaceVariant,
    borderRadius: theme.spacing.sm,
    padding: theme.spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  preferencesSection: {
    marginVertical: theme.spacing.xs,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
  },
  preferenceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  preferenceText: {
    flex: 1,
  },
  actionsSection: {
    marginVertical: theme.spacing.xs,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  actionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  logoutIconContainer: {
    backgroundColor: theme.colors.errorContainer,
  },
  actionText: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.xs,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButton: {
    flex: 1,
  },
});
