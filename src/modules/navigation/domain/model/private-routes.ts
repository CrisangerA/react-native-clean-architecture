// Private Routes
export enum PrivateRoutes {
  Profile = 'Profile',
  Example = 'Example',
  Products = 'Products',
}

export type PrivateStackParamsList = {
  [PrivateRoutes.Profile]: undefined;
  [PrivateRoutes.Example]: undefined;
  [PrivateRoutes.Products]: undefined;
};

export const ICONS_PRIVATE_NAV = {
  [PrivateRoutes.Example]: 'image-multiple',
  [PrivateRoutes.Profile]: 'account',
  [PrivateRoutes.Products]: 'package-variant',
};
