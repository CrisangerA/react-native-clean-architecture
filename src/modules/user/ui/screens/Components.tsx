import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Button, TextInput, Margin } from '@components/core'; // Asegúrate que la ruta sea correcta
import { COLORS } from '@theme/colors';
import { commonStyles } from '@theme/components';

export default function ComponentsScreen() {
  return (
    <View>
      <Text font="h1Bold" style={styles.title}>
        Componentes Base
      </Text>
      <ScrollView style={commonStyles.paddingHorizontal}>
        <Section title="Textos Titulos (Display)">
          <Text font="displayRegular">Display Regular</Text>
          <Text font="displayMedium">Display Medium</Text>
          <Text font="displayBold">Display Bold</Text>
        </Section>

        <Section title="Textos Titulos (Headline)">
          <Text font="h1Regular">H1 Regular (Accent)</Text>
          <Text font="h1Medium">H1 Medium (Accent)</Text>
          <Text font="h1Bold">H1 Bold (Accent)</Text>

          <Text font="h2Regular">H2 Regular</Text>
          <Text font="h2Medium">H2 Medium</Text>
          <Text font="h2Bold">H2 Bold</Text>

          <Text font="h3Regular">H3 Regular (Error)</Text>
          <Text font="h3Medium">H3 Medium (Error)</Text>
          <Text font="h3Bold">H3 Bold (Error)</Text>
        </Section>

        <Section title="Textos (Body)">
          <Text font="bodyLRegular">Body Large Regular</Text>
          <Text font="bodyMMedium">Body Medium (Secondary Text)</Text>
          <Text font="bodySBold">Body Small Bold</Text>
        </Section>

        <Section title="Textos (caption)">
          <Text font="captionRegular" underline>
            Caption Text (Underline)
          </Text>
          <Text font="captionMedium" underline>
            Caption Text (Medium)
          </Text>
          <Text font="captionBold" underline>
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

        <Margin top={100} />
      </ScrollView>
    </View>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <View style={styles.card}>
    <Text font="bodyLBold" color="primary">
      {title}
    </Text>
    <View style={styles.spacer} />
    {children}
  </View>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    shadowColor: COLORS.grey500,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },
  spacer: {
    height: 16,
  },
});
