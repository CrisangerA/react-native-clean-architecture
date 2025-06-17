import React from 'react';
import { BaseLayout } from '@components/layout';
import { Margin, Text } from '@components/core';
import FormExample from '../components/Form';

export default function FormScreen() {
  return (
    <BaseLayout scrollable>
      <Margin top={12} />
      <Text title="Formulario con validaciones" font="bodyMedium" />
      <Margin top={12} />
      <FormExample />
      <Margin top={48} />
    </BaseLayout>
  );
}
