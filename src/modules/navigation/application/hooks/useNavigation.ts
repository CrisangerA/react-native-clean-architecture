import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// Routes
import {
  OnboardingStackParamsList,
  PrivateStackParamsList,
  PublicStackParamsList,
} from '@modules/navigation/domain/model';
import { ExampleStackParamsList } from '@modules/navigation/domain/model/example-routes';

export const useNavigationOnboarding = () =>
  useNavigation<NativeStackNavigationProp<OnboardingStackParamsList>>();

export const useNavigationPrivate = () =>
  useNavigation<BottomTabNavigationProp<PrivateStackParamsList>>();

export const useNavigationPublic = () =>
  useNavigation<NativeStackNavigationProp<PublicStackParamsList>>();

export const useNavigationExample = () =>
  useNavigation<NativeStackNavigationProp<ExampleStackParamsList>>();
