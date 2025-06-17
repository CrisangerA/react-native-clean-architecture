import React from 'react';
import { BaseLayout } from '@components/layout';
import { Margin, Text } from '@components/core';
import FormExample from '../components/Form';

const ExampleScreen: React.FC = () => {
  return (
    <BaseLayout scrollable>
      <Margin top={12} />
      <Text title="Formulario con validaciones" font="bodyMedium" />
      <Margin top={12} />
      <FormExample />
      <Margin top={48} />
      <Text title="Formulario con validaciones" font="bodyMedium" />
      <Margin top={12} />
      <FormExample />
    </BaseLayout>
  );
};

export default ExampleScreen;
