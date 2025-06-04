import { NavigationContainer } from '@react-navigation/native';
// Routes
import PrivateRoutesStack from './PrivateRoutes';
import PublicRoutesStack from './PublicRoutes';
// Modules
import { useAuth } from '@modules/authentication/application/hooks';
import { Loading } from '@components/layout';

function Navigation() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <PrivateRoutesStack />;
  }

  return <PublicRoutesStack />;
}

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
