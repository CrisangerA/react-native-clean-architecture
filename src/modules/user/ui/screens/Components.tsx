import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import {
  Text,
  Button,
  TextInput,
  Margin,
  Select,
  Checkbox,
} from '@components/core'; // Asegúrate que la ruta sea correcta
import { COLORS } from '@theme/colors';
import { commonStyles } from '@theme/index';
import { BaseLayout, Loading } from '@components/layout';
import { DatePicker } from '@components/core';

export default function ComponentsScreen() {
  return (
    <BaseLayout style={styles.root}>
      <ScrollView style={commonStyles.paddingHorizontal}>
        <Margin top={24} />
        <Section title="Botones">
          <Button title="Primary Button" onPress={() => {}} />
          <Margin top={20} />
          <Button
            title="Secondary Button"
            type="secondary"
            onPress={() => {}}
          />
          <Margin top={20} />
          <Button
            title="Outline Button"
            type="outline"
            onPress={() => {}}
            icon="home"
            iconPosition="left"
          />
          <Margin top={20} />
          <Button
            title="Disabled Button"
            type="disabled"
            onPress={() => {}}
            disabled
            icon="home"
            iconPosition="right"
          />
        </Section>

        <Section title="Entrada de texto">
          <TextInput label="Nombre completo" placeholder="Escribe algo" />
          <Margin top={16} />
          <TextInput
            label="Texto deshabilitado"
            placeholder="Escribe algo"
            value="Valor Input con valor lorem ipsum loremp siadaois daois daios daosidoid "
            editable={false}
            iconRight="home"
          />
          <Margin top={16} />
          <TextInput
            placeholder="Segundo nombre"
            type="error"
            label="Texto con error"
            value="Este text-input tiene la variante error"
            error="Error: Este es un mensaje de error"
            iconLeft="account"
          />
          <Margin top={24} />
          <Text title="Selectores:" font="bodyMMedium" />
          <Margin top={12} />
          <Select
            pointerEvents="none"
            label="Ciudad"
            labelModal="Seleccionar ciudad"
            placeholder="Selecciona una ciudad"
            options={[
              { label: 'Lunes', value: '1' },
              { label: 'Martes', value: '2' },
              { label: 'Miercoles', value: '3' },
              { label: 'Jueves', value: '4' },
            ]}
          />{' '}
          <Margin top={12} />
          <Select
            pointerEvents="none"
            label="Ciudad"
            labelModal="Seleccionar ciudad"
            placeholder="Selecciona una ciudad"
            options={[]}
            editable={false}
          />
          <Margin top={24} />
          <Text title="Fechas:" font="bodyMMedium" />
          <Margin top={12} />
          <DatePicker
            mode="time"
            date={new Date()}
            setDate={() => {}}
            label="Hora"
            placeholder="Selecciona una hora"
          />
          <Margin top={16} />
          <DatePicker
            mode="date"
            setDate={() => {}}
            label="Fecha"
            placeholder="Selecciona una fecha"
          />
          <Margin top={16} />
          <DatePicker
            mode="datetime"
            setDate={() => {}}
            label="Fecha y hora"
            editable={false}
            placeholder="Selecciona una fecha y hora"
          />
        </Section>

        <Section title="Indicators">
          <Loading />
          <Loading label="Custom text..." />
        </Section>

        <Section title="Checkboxs">
          <Checkbox selected onChange={() => {}} title="Checkbox primary" />
          <Checkbox
            selected={false}
            onChange={() => {}}
            title="Checkbox primary"
          />
          <Checkbox
            selected
            onChange={() => {}}
            color="secondary"
            title="Checkbox primary"
          />
          <Checkbox
            selected={false}
            onChange={() => {}}
            color="tertiary"
            title="Checkbox primary"
          />
        </Section>

        <Margin top={100} />
      </ScrollView>
    </BaseLayout>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <View style={styles.card}>
    <Text font="h3Medium">{title}</Text>
    <View style={styles.spacer} />
    {children}
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 0,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    ...commonStyles.card,
    marginBottom: 24,
    padding: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
  },
  spacer: {
    height: 16,
  },
});
