export enum ExampleRoutes {
  Components = 'Components',
  Menu = 'Menu',
  Form = 'Form',
  Screen = 'Screen',
}

export type ExampleStackParamsList = {
  [ExampleRoutes.Menu]: undefined;
  [ExampleRoutes.Components]: undefined;
  [ExampleRoutes.Screen]: undefined;
  [ExampleRoutes.Form]: undefined;
};
