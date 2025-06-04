export enum OnboardingRoutes {
  Welcome = 'OnboardingWelcome',
  BusinessInfo = 'OnboardingBusinessInfo',
  Superpower = 'OnboardingSuperpower',
  CustomConfig = 'OnboardingCustomConfig',
  FinalPush = 'OnboardingFinalPush',
}

export type OnboardingStackParamsList = {
  [OnboardingRoutes.Welcome]: undefined;
  [OnboardingRoutes.BusinessInfo]: undefined;
  [OnboardingRoutes.Superpower]: undefined;
  [OnboardingRoutes.CustomConfig]: undefined;
  [OnboardingRoutes.FinalPush]: undefined;
};
