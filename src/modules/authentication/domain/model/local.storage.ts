export type State = {
  isAuthenticated: boolean;
};

export type Actions = {
  login: () => void;
  logout: () => void;
};
