import React from 'react';
// Components
import { Text, Button, Margin } from '@components/core';
// Modules
import { useMutationSignIn } from '@modules/authentication/application/mutations';
import { BaseLayout, Loading } from '@components/layout';

import app from 'app.json';

export default function SignIn() {
  const { mutateAsync, isPending } = useMutationSignIn();

  const handleSubmit = async () => await mutateAsync();

  if (isPending) {
    return <Loading />;
  }

  return (
    <BaseLayout>
      <Text title={app.displayName} font="h1Medium" />
      <Margin top={20} />
      <Button title="Iniciar Sesión" onPress={handleSubmit} type="primary" />
    </BaseLayout>
  );
}
