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
      <Text font="h1Bold" style={styles.title}>
        Componentes Base
      </Text>
      <ScrollView style={commonStyles.paddingHorizontal}>
        <Section title="Botones (Button)">
          <Button
            title="Primary Button"
            type="primary"
            onPress={() => console.log('Primary pressed')}
          />
          <View style={styles.spacer} />
          <Button
            title="Secondary Button"
            type="secondary"
            onPress={() => console.log('Secondary pressed')}
          />
          <View style={styles.spacer} />
          <Button
            title="Outline Button"
            type="outline"
            onPress={() => console.log('Outline pressed')}
          />
          <View style={styles.spacer} />
          <Button
            title="Disabled Button"
            type="disabled"
            onPress={() => console.log('Disabled pressed (should not happen)')}
            disabled
            icon="home"
            iconPosition="right"
          />
        </Section>

        <Section title="Entradas">
          <Text title="Texto plano:" font="bodyMMedium" />
          <Margin top={12} />
          <TextInput label="TextInput primary" placeholder="Escribe algo" />
          <Margin top={16} />
          <TextInput
            placeholder="Escribe algo"
            type="error"
            label="TextInput con error"
            value="Este text-input tiene la variante error"
            error="Error: Este es un mensaje de error"
          />
          <Margin top={16} />
          <TextInput
            label="TextInput deshabilitado"
            placeholder="Escribe algo"
            value="Valor Input con valor lorem ipsum loremp siadaois daois daios daosidoid "
            editable={false}
            iconRight="home"
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
            date={new Date()}
            setDate={() => {}}
            label="Fecha"
            placeholder="Selecciona una fecha"
          />
          <Margin top={16} />
          <DatePicker
            mode="datetime"
            date={new Date()}
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
    <Text font="bodyLBold">{title}</Text>
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
