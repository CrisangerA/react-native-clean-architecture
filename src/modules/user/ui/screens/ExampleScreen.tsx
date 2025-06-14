import React from 'react';
import { BaseLayout } from '@components/layout';
import { Margin, Text } from '@components/core';
import FormExample from '../components/Form';

const ExampleScreen: React.FC = () => {
  return (
    <BaseLayout>
      <Text title="Formulario con validaciones" font="bodyLBold" />
      <Margin top={12} />
      <FormExample />
    </BaseLayout>
  );
};

export default ExampleScreen;
