import React, { useState } from 'react';
import {
  Text,
  Button,
  TextInput,
  Margin,
  Select,
  Checkbox,
  Card,
  DatePicker,
  Icon,
  Avatar,
} from '@components/core';
import { BaseLayout } from '@components/layout';
import { theme } from '@theme/index';
import { StyleSheet, View } from 'react-native';

// Opciones para el componente Select
const selectOptions = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
  { label: 'Opción 3', value: '3' },
];

export default function ComponentsScreen() {
  // Estados para los componentes interactivos
  const [date, setDate] = useState<Date>(new Date());
  const [checkboxSelected, setCheckboxSelected] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    value: string;
  }>();
  return (
    <BaseLayout scrollable>
      <Text title="Componentes Core" font="headlineMedium" align="center" />
      <Margin top={theme.spacing.md} />

      {/* Sección de Textos */}
      <Card title="Textos">
        <Text title="Display" font="displayMedium" />
        <Text title="Headline" font="headlineMedium" />
        <Text title="Title" font="titleMedium" />
        <Text title="Body" font="bodyMedium" />
        <Text title="Label" font="labelMedium" />
        <Margin top={theme.spacing.sm} />
        <Text title="Texto con color primario" color="primary" />
        <Text title="Texto con color secundario" color="secondary" />
        <Text title="Texto con color de error" color="error" />
        <Text title="Texto subrayado" underline />
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Sección de Botones */}
      <Card title="Botones">
        <Button title="Botón Primario" onPress={() => {}} />
        <Margin top={theme.spacing.sm} />
        <Button title="Botón Secundario" type="secondary" onPress={() => {}} />
        <Margin top={theme.spacing.sm} />
        <Button
          title="Botón Outline"
          type="outline"
          onPress={() => {}}
          icon="home"
          iconPosition="left"
        />
        <Margin top={theme.spacing.sm} />
        <Button
          title="Botón Deshabilitado"
          type="disabled"
          onPress={() => {}}
          disabled
          icon="home"
          iconPosition="right"
        />
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Sección de Inputs */}
      <Card title="Campos de Texto">
        <TextInput
          label="Campo de texto básico"
          placeholder="Escribe algo aquí"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Margin top={theme.spacing.sm} />
        <TextInput
          label="Campo con icono izquierdo"
          placeholder="Buscar..."
          iconLeft="magnify"
        />
        <Margin top={theme.spacing.sm} />
        <TextInput
          label="Campo con icono derecho"
          placeholder="Contraseña"
          iconRight="eye"
          secureTextEntry
        />
        <Margin top={theme.spacing.sm} />
        <TextInput
          label="Campo con error"
          placeholder="Email"
          error="El email no es válido"
          value="correo@invalido"
        />
        <Margin top={theme.spacing.sm} />
        <TextInput
          label="Campo deshabilitado"
          placeholder="No editable"
          value="Valor no editable"
          editable={false}
        />
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Sección de Selects y DatePickers */}
      <Card title="Selectores y Fechas">
        <Select
          label="Selector de opciones"
          labelModal="Selecciona una opción"
          placeholder="Selecciona..."
          options={selectOptions}
          valueItem={selectedItem}
          onChangeValue={setSelectedItem}
        />
        <Margin top={theme.spacing.md} />
        <DatePicker
          label="Selector de fecha"
          placeholder="Selecciona una fecha"
          date={date}
          setDate={setDate}
          mode="date"
        />
        <Margin top={theme.spacing.sm} />
        <DatePicker
          label="Selector de hora"
          placeholder="Selecciona una hora"
          date={date}
          setDate={setDate}
          mode="time"
        />
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Sección de Checkbox */}
      <Card title="Checkboxes">
        <View style={styles.checkboxContainer}>
          <Checkbox
            title="Checkbox primario"
            selected={checkboxSelected}
            onChange={setCheckboxSelected}
            color="primary"
          />
          <Margin top={theme.spacing.sm} />
          <Checkbox
            title="Checkbox secundario"
            selected={!checkboxSelected}
            onChange={selected => setCheckboxSelected(!selected)}
            color="secondary"
          />
          <Margin top={theme.spacing.sm} />
          <Checkbox
            title="Checkbox con error"
            selected={false}
            onChange={() => {}}
            color="error"
            error="Este campo es requerido"
          />
        </View>
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Sección de Iconos */}
      <Card title="Iconos">
        <View style={styles.iconsContainer}>
          <View style={styles.iconItem}>
            <Icon name="home" size={24} />
            <Text title="home" font="labelSRegular" />
          </View>
          <View style={styles.iconItem}>
            <Icon name="account" size={24} color="secondary" />
            <Text title="account" font="labelSRegular" />
          </View>
          <View style={styles.iconItem}>
            <Icon name="calendar-blank" size={24} color="tertiary" />
            <Text title="calendar" font="labelSRegular" />
          </View>
          <View style={styles.iconItem}>
            <Icon name="magnify" size={24} color="error" />
            <Text title="magnify" font="labelSRegular" />
          </View>
        </View>
      </Card>

      <Margin top={theme.spacing.md} />

      {/* Sección de Avatar */}
      <Card title="Avatares">
        <View style={styles.avatarContainer}>
          <Avatar size={40} />
          <Avatar size={60} />
          <Avatar size={80} source={{ uri: 'https://i.pravatar.cc/300' }} />
        </View>
      </Card>

      <Margin top={theme.spacing.xxl} />
    </BaseLayout>
  );
}
const styles = StyleSheet.create({
  checkboxContainer: {
    marginVertical: theme.spacing.sm,
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.sm,
  },
  iconItem: {
    alignItems: 'center',
    marginVertical: theme.spacing.sm,
    width: '22%',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: theme.spacing.md,
  },
});
