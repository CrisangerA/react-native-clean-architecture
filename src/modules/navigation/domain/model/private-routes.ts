// Private Routes
export enum PrivateRoutes {
  Profile = 'Profile',
  Example = 'Example',
}

export type PrivateStackParamsList = {
  [PrivateRoutes.Profile]: undefined;
  [PrivateRoutes.Example]: undefined;
};
