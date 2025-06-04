import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { mmkvStorage, mmkvReviver } from '@config/storage';
import { Actions, State } from '../domain/model/local.storage';

const initialState: State = {
  isAuthenticated: false,
};

export const useAuthStorage = create<State & Actions>()(
  persist(
    set => ({
      ...initialState,
      login: () => {
        set(state => ({ ...state, isAuthenticated: true }), true);
      },
      logout: () => {
        set(state => ({ ...state, ...initialState }), true);
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => mmkvStorage, {
        reviver: mmkvReviver,
      }),
    },
  ),
);
