import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Button, TextInput, Margin } from '@components/core'; // Asegúrate que la ruta sea correcta
import { COLORS } from '@theme/colors';
import { commonStyles } from '@theme/index';
import { BaseLayout, Loading } from '@components/layout';

export default function ComponentsScreen() {
  return (
    <BaseLayout style={styles.root}>
      <Text font="h1Bold" style={styles.title}>
        Componentes Base
      </Text>
      <ScrollView style={commonStyles.paddingHorizontal}>
        <Section title="Textos (Body)">
          <Text font="bodyLRegular">Body Large Regular</Text>
          <Text font="bodyMMedium" color="error">
            Body Medium (Secondary Text)
          </Text>
          <Text font="bodySBold" color="outline">
            Body Small Bold
          </Text>
        </Section>

        <Section title="Textos (caption)">
          <Text font="captionRegular" color="tertiary">
            Caption Text (Underline)
          </Text>
          <Text font="captionMedium" underline>
            Caption Text (Medium)
          </Text>
          <Text font="captionBold" underline color="primaryContainer">
            Caption Text (Bold)
          </Text>
        </Section>

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
          />
        </Section>

        <Section title="Entradas de Texto (TextInput)">
          <TextInput placeholder="Primary Input" type="primary" />
          <View style={styles.spacer} />
          <TextInput
            placeholder="Error Input"
            type="error"
            value="Texto con error"
            error="Error: Este es un mensaje de error"
          />
          <View style={styles.spacer} />
          <TextInput
            placeholder="Input con valor"
            type="primary"
            value="Valor inicial"
          />
        </Section>

        <Section title="Indicators">
          <Loading />
          <Loading label="Custom text..." />
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
