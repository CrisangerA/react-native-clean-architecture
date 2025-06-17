import { Card, Margin, Text } from '@components/core';
import { BaseLayout } from '@components/layout';
import { useNavigationExample } from '@modules/navigation/application/hooks';
import { ExampleRoutes } from '@modules/navigation/domain/model/example-routes';
import { theme } from '@theme/index';
import React from 'react';

export default function MenuScreen() {
  const { navigate } = useNavigationExample();
  return (
    <BaseLayout scrollable>
      <Text
        title="React Native Clean Architecture Components"
        font="titleMedium"
      />
      <Margin top={theme.spacing.xl} />
      <Card
        title="Componentes"
        onPress={() => navigate(ExampleRoutes.Components)}
      >
        <Text title="Aqui encontraras todos los componentes dispoinibles para utilizar en la app" />
      </Card>
      <Margin top={theme.spacing.lg} />
      <Card title="Formularios" onPress={() => navigate(ExampleRoutes.Form)}>
        <Text title="Ejemplos de formularios con validaciones y diferentes campos de texto" />
      </Card>
      <Margin top={theme.spacing.lg} />
      <Card title="Vistas" onPress={() => navigate(ExampleRoutes.Screen)}>
        <Text title="Diferentes vistas que puedes hacer con estos componentes" />
      </Card>
      <Margin top={theme.spacing.xxl} />
    </BaseLayout>
  );
}
