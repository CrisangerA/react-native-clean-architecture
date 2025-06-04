import { useQuery } from '@tanstack/react-query';
import { useUserStorage } from '@modules/user/infrastructure/user-local.storage';
import { userService } from '@modules/user/infrastructure/user.service';

/**
 * Hook para consultar si el usuario tiene pendiente el onboarding
 * @returns Query con el estado de la bandera hasOnboarding
 */
export function useQueryUserHasOnboarding() {
  const uid = useUserStorage(state => state.user.uid);

  return useQuery({
    queryKey: ['user', 'hasOnboarding', uid],
    queryFn: async () => {
      if (!uid) {
        throw new Error('User not authenticated');
      }

      const result = await userService.getUserField<boolean>(
        uid,
        'hasOnboarding',
      );

      if (result instanceof Error) {
        throw result;
      }

      return result;
    },
    // Solo ejecutar la query si el usuario está autenticado
    enabled: !!uid,
    staleTime: Infinity,
  });
}
