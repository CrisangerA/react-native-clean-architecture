// Private Routes
export enum PrivateRoutes {
  Profile = 'Profile',
  Example = 'Example',
}

export type PrivateStackParamsList = {
  [PrivateRoutes.Profile]: undefined;
  [PrivateRoutes.Example]: undefined;
};

export const ICONS_PRIVATE_NAV = {
  [PrivateRoutes.Example]: 'image-multiple',
  [PrivateRoutes.Profile]: 'account',
};
