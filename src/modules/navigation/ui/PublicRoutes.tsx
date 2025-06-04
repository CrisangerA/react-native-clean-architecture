import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { PublicRoutes, PublicStackParamsList } from '../domain/model';
// Screens
import LandingScreen from '@modules/authentication/ui/screens/Landing';
import SignInScreen from '@modules/authentication/ui/screens/SignIn';

const PublicStack = createNativeStackNavigator<PublicStackParamsList>();

export const useNavigationPublic = () =>
  useNavigation<NativeStackNavigationProp<PublicStackParamsList>>();

export default function PublicRoutesStack() {
  return (
    <PublicStack.Navigator screenOptions={{ headerShown: false }}>
      <PublicStack.Screen
        name={PublicRoutes.Landing}
        component={LandingScreen}
      />
      <PublicStack.Screen name={PublicRoutes.SignIn} component={SignInScreen} />
    </PublicStack.Navigator>
  );
}
