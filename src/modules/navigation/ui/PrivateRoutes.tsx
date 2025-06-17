import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
// Screens
import ProfileScreen from '@modules/user/ui/screens/Profile';
// Theme & Other
import { screenWidth } from '@theme/responsive';
import { PrivateRoutes, PrivateStackParamsList } from '../domain/model';
import { theme } from '@theme/index';
import { Icon } from '@components/core';
import ExampleRoutesStack from './ExampleRoutes';

const Tab = createBottomTabNavigator<PrivateStackParamsList>();
export const useNavigationPrivate = () =>
  useNavigation<BottomTabNavigationProp<PrivateStackParamsList>>();

const slideAnimationOptions = {
  transitionSpec: {
    animation: 'timing' as const,
    config: {
      duration: 369,
      easing: Easing.inOut(Easing.ease),
    },
  },
  sceneStyleInterpolator: ({
    current,
  }: {
    current: { progress: Animated.Value };
  }) => ({
    sceneStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [-screenWidth, 0, screenWidth],
          }),
        },
        {
          scale: current.progress.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0.6, 1, 0.6],
          }),
        },
      ],
    },
  }),
};

const ICONS_NAV = {
  [PrivateRoutes.Example]: 'image-multiple',
  [PrivateRoutes.Profile]: 'account',
};

export default function PrivateRoutesStack() {
  const tabBarIcon = React.useCallback(
    (name: string) => <Icon name={name} size={24} />,
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        lazy: true,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarIcon: () => tabBarIcon(ICONS_NAV[route.name]),
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.outline,
      })}
    >
      <Tab.Screen
        name={PrivateRoutes.Example}
        component={ExampleRoutesStack}
        options={slideAnimationOptions}
      />
      <Tab.Screen
        name={PrivateRoutes.Profile}
        component={ProfileScreen}
        options={slideAnimationOptions}
      />
    </Tab.Navigator>
  );
}
