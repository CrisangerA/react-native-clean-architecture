/**
 * Product entity model
 * Defines the structure of a product in the domain layer
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  stock: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Product creation data (without auto-generated fields)
 */
export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  stock: number;
}

/**
 * Product update data (partial fields)
 */
export interface UpdateProductData {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  imageUrl?: string;
  stock?: number;
  isActive?: boolean;
}