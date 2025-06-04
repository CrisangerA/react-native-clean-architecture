// Private Routes
export enum PrivateRoutes {
  Components = 'Components',
  Profile = 'Profile',
  Example = 'Example',
}

export type PrivateStackParamsList = {
  [PrivateRoutes.Components]: undefined;
  [PrivateRoutes.Profile]: undefined;
  [PrivateRoutes.Example]: undefined;
};
