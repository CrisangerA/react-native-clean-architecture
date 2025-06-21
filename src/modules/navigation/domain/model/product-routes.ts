/**
 * Product module navigation routes
 * Defines all routes for product CRUD operations
 */
export enum ProductRoutes {
  ProductList = 'ProductList',
  ProductDetail = 'ProductDetail',
  CreateProduct = 'CreateProduct',
  EditProduct = 'EditProduct',
}

export type ProductStackParamsList = {
  [ProductRoutes.ProductList]: undefined;
  [ProductRoutes.ProductDetail]: { productId: string };
  [ProductRoutes.CreateProduct]: undefined;
  [ProductRoutes.EditProduct]: { productId: string };
};