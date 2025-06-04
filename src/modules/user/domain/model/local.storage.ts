import { User } from './user.model';

export interface State {
  user: User;
}

export interface Actions {
  setUser: (user: User) => void;
  clearUser: () => void;
}
