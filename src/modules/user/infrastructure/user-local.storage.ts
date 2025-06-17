import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { mmkvStorage, mmkvReviver } from '@config/storage';
import { Actions, State, User } from '../domain/model';

const initialState: State = {
  user: {
    uid: '',
    email: '',
    name: '',
    imageUrl: '',
    amount: '0',
    terms: false,
    date: new Date(),
    city: { label: '', value: '' },
  },
};

export const useUserStorage = create<State & Actions>()(
  persist(
    set => ({
      ...initialState,
      setUser: (userData: User) => {
        set(state => ({ ...state, user: userData }));
      },
      clearUser: () => {
        set(state => ({ ...state, user: initialState.user }));
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => mmkvStorage, {
        reviver: mmkvReviver,
      }),
    },
  ),
);
