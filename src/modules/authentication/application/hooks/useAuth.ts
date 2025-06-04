import { useCallback, useEffect, useState } from 'react';
import { type FirebaseAuthTypes, getAuth } from '@react-native-firebase/auth';
import { useAuthStorage } from '@modules/authentication/infrastructure/auth-local.storage';
import { useQueryUserHasOnboarding } from '@modules/user/application/queries';

/**
 * Hook para manejar el estado de autenticación utilizando Firebase Auth
 * @returns Estado de autenticación, onboarding y carga
 */
export function useAuth() {
  const [initializing, setInitializing] = useState(true);
  const { isAuthenticated, login, logout } = useAuthStorage(state => state);
  const { data: hasOnboarding, isLoading } = useQueryUserHasOnboarding();
  // Manejador para cambios en el estado de autenticación
  const onAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      if (user) {
        // Si hay un usuario autenticado, actualizar el estado
        //!isAuthenticated &&
        login();
      } else if (user === null) {
        // Si no hay usuario, asegurarse de que el estado refleje esto
        //isAuthenticated &&
        logout();
      }

      if (initializing) {
        setInitializing(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated],
  );

  useEffect(() => {
    // Suscribirse a los cambios en el estado de autenticación
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);

    // Limpiar la suscripción al desmontar
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isAuthenticated,
    hasOnboarding: hasOnboarding || false,
    isLoading: initializing || isLoading,
  };
}
