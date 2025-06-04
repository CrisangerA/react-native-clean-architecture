export enum PublicRoutes {
  Landing = 'Landing',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export type PublicStackParamsList = {
  [PublicRoutes.Landing]: undefined;
  [PublicRoutes.SignUp]: undefined;
  [PublicRoutes.SignIn]: undefined;
};
