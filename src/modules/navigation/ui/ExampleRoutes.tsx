import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// Screens
import ComponentsScreen from '@modules/user/ui/screens/ComponentsScreen';
import ExampleScreen from '@modules/user/ui/screens/ExampleScreen';
// Routes
import {
  ExampleRoutes,
  ExampleStackParamsList,
} from '../domain/model/example-routes';
import FormScreen from '@modules/user/ui/screens/FormScreen';
import MenuScreen from '@modules/user/ui/screens/MenuScreen';

const ExampleStack = createNativeStackNavigator<ExampleStackParamsList>();

export const useNavigationPublic = () =>
  useNavigation<NativeStackNavigationProp<ExampleStackParamsList>>();

export default function ExampleRoutesStack() {
  return (
    <ExampleStack.Navigator screenOptions={{ headerShown: false }}>
      <ExampleStack.Screen name={ExampleRoutes.Menu} component={MenuScreen} />
      <ExampleStack.Screen
        name={ExampleRoutes.Components}
        component={ComponentsScreen}
      />
      <ExampleStack.Screen name={ExampleRoutes.Form} component={FormScreen} />
      <ExampleStack.Screen
        name={ExampleRoutes.Screen}
        component={ExampleScreen}
      />
    </ExampleStack.Navigator>
  );
}
