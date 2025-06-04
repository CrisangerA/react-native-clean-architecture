import React from 'react';
// Containers
import AppContainer from './src/containers/AppContainer';
import SecureContainer from './src/containers/SecureContainer';
import RootNavigation from './src/modules/navigation/ui/RootNavigation';

export default function App() {
  return (
    <SecureContainer>
      <AppContainer>
        <RootNavigation />
      </AppContainer>
    </SecureContainer>
  );
}
