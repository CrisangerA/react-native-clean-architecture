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
import ExampleRoutesStack from './ExampleRoutes';
import ProductRoutesStack from './ProductRoutes';
// Theme & Other
import { SPACING, theme } from '@theme/index';
import { screenWidth } from '@theme/responsive';
// Components
import { Icon } from '@components/core';
// Navigation types
import {
  ICONS_PRIVATE_NAV,
  PrivateRoutes,
  PrivateStackParamsList,
} from '../domain/model';

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

export default function PrivateRoutesStack() {
  const tabBarIcon = React.useCallback(
    (name: string, focused: boolean) => (
      <Icon
        name={name}
        size={SPACING.lg}
        color={focused ? 'primary' : 'text'}
      />
    ),
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
        tabBarIcon: ({ focused }) =>
          tabBarIcon(ICONS_PRIVATE_NAV[route.name], focused),
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      })}
    >
      <Tab.Screen
        name={PrivateRoutes.Example}
        component={ExampleRoutesStack}
        options={slideAnimationOptions}
      />
      <Tab.Screen
        name={PrivateRoutes.Products}
        component={ProductRoutesStack}
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
