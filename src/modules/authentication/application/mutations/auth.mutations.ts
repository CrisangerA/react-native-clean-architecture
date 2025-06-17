import { useMutation } from '@tanstack/react-query';
// Modules
import { User } from '@modules/user/domain/model';
import { userService } from '@modules/user/infrastructure/user.service';
import { useUserStorage } from '@modules/user/infrastructure/user-local.storage';
// Auth
import authService from '@modules/authentication/infrastructure/auth.service';

export function useMutationSignIn() {
  const setUser = useUserStorage(state => state.setUser);

  return useMutation({
    mutationFn: async () => {
      const result = await authService.signInWithGoogle();
      if (result instanceof Error) {
        // TODO: Handle error, If infra has an error display it
        return result;
      }

      // Set user in local storage and create in Firestore
      if (result.user) {
        const { uid, email, displayName, photoURL } = result.user;
        const userData: User = {
          uid,
          email: email || '',
          name: displayName || '',
          imageUrl: photoURL || '',
          amount: '',
          city: { label: '', value: '' },
          date: new Date(),
          terms: false,
        };

        if (result.additionalUserInfo?.isNewUser) {
          // Crear o actualizar el usuario en Firestore
          const firestoreResult = await userService.createUser(userData);
          if (firestoreResult instanceof Error) {
            // TODO: Handle error, If infra has an error display it
            return firestoreResult;
          }
        }

        setUser(userData);
      }
      return result;
    },
  });
}

export function useMutationSignOut() {
  const clearUser = useUserStorage(state => state.clearUser);
  return useMutation({
    mutationFn: async () => {
      const result = await authService.signOut();
      if (result instanceof Error) {
        return result;
      }
      clearUser();
      return result;
    },
  });
}
