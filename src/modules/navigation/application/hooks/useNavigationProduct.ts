import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  ProductStackParamsList,
} from '../../domain/model/product-routes';

/**
 * Hook for type-safe navigation within the Product module
 * Provides navigation methods with proper typing for product screens
 */
export default function useNavigationProduct() {
  return useNavigation<NativeStackNavigationProp<ProductStackParamsList>>();
}