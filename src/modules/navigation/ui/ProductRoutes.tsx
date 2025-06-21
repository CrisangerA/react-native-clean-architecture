import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import {
  ProductListScreen,
  ProductDetailScreen,
  CreateProductScreen,
  EditProductScreen,
} from '@modules/products/ui/screens';

// Types
import {
  ProductRoutes,
  ProductStackParamsList,
} from '../domain/model/product-routes';

const ProductStack = createNativeStackNavigator<ProductStackParamsList>();

/**
 * ProductRoutesStack component
 * Defines the navigation stack for product-related screens
 */
export default function ProductRoutesStack() {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={ProductRoutes.ProductList}
    >
      <ProductStack.Screen
        name={ProductRoutes.ProductList}
        component={ProductListScreen}
        options={{
          title: 'Productos',
        }}
      />
      <ProductStack.Screen
        name={ProductRoutes.ProductDetail}
        component={ProductDetailScreen}
        options={{
          title: 'Detalle del Producto',
        }}
      />
      <ProductStack.Screen
        name={ProductRoutes.CreateProduct}
        component={CreateProductScreen}
        options={{
          title: 'Crear Producto',
          presentation: 'modal',
        }}
      />
      <ProductStack.Screen
        name={ProductRoutes.EditProduct}
        component={EditProductScreen}
        options={{
          title: 'Editar Producto',
          presentation: 'modal',
        }}
      />
    </ProductStack.Navigator>
  );
}
