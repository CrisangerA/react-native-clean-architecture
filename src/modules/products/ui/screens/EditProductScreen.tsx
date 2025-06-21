import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text, Button, Card, Margin } from '@components/core';
import { TextInput, Select, Checkbox } from '@components/form';
import { BaseLayout } from '@components/layout';
import { theme } from '@theme/index';
import { useNavigationProduct } from '@modules/navigation/application/hooks';
import { UpdateProductData } from '../../domain/model/product.model';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  ProductStackParamsList,
  ProductRoutes,
} from '@modules/navigation/domain/model/product-routes';

type EditProductRouteProp = RouteProp<
  ProductStackParamsList,
  ProductRoutes.EditProduct
>;

// Product categories for the select dropdown
const productCategories = [
  { label: 'Electrónicos', value: 'Electronics' },
  { label: 'Ropa', value: 'Clothing' },
  { label: 'Hogar', value: 'Home' },
  { label: 'Deportes', value: 'Sports' },
  { label: 'Libros', value: 'Books' },
  { label: 'Juguetes', value: 'Toys' },
  { label: 'Otros', value: 'Other' },
];

// Mock product data for editing
const mockProduct = {
  id: '1',
  name: 'iPhone 15 Pro',
  description: 'Latest Apple smartphone with titanium design',
  price: 999,
  category: 'Electronics',
  stock: 25,
  isActive: true,
  imageUrl: 'https://via.placeholder.com/300x300',
};

/**
 * EditProductScreen component
 * Form to edit an existing product
 */
export default function EditProductScreen() {
  const route = useRoute<EditProductRouteProp>();
  const { goBack } = useNavigationProduct();
  const { productId } = route.params;

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
    setValue,
  } = useForm<UpdateProductData>({
    resolver: yupResolver(
      Yup.object().shape({
        // name: Yup.string()
        //   .min(2, 'El nombre debe tener al menos 2 caracteres')
        //   .notRequired(),
        // description: Yup.string()
        //   .min(10, 'La descripción debe tener al menos 10 caracteres')
        //   .notRequired(),
        // price: Yup.number()
        //   .min(0.01, 'El precio debe ser mayor a 0')
        //   .notRequired(),
        // category: Yup.string().notRequired(),
        // imageUrl: Yup.string()
        //   .matches(
        //     /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i,
        //     'Ingresa una URL válida de imagen',
        //   )
        //   .notRequired(),
        // stock: Yup.number()
        //   .min(0, 'El stock no puede ser negativo')
        //   .notRequired(),
        // isActive: Yup.boolean().notRequired(),
      }),
    ),
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      category: '',
      imageUrl: '',
      stock: 0,
      isActive: true,
    },
  });

  // const isActive = watch('isActive');

  /**
   * Load product data when component mounts
   */
  useEffect(() => {
    // Here would be the actual API call to fetch product data
    // For now, we'll use mock data
    setValue('name', mockProduct.name);
    setValue('description', mockProduct.description);
    setValue('price', mockProduct.price);
    setValue('category', mockProduct.category);
    setValue('imageUrl', mockProduct.imageUrl);
    setValue('stock', mockProduct.stock);
    setValue('isActive', mockProduct.isActive);
  }, [productId, setValue]);

  /**
   * Handles form submission
   */
  const onSubmit = (data: UpdateProductData) => {
    console.log('Updating product:', productId, data);

    // Here would be the actual product update logic
    // For now, we'll show a success message and go back
    Alert.alert(
      'Producto Actualizado',
      `El producto "${data.name}" ha sido actualizado exitosamente.`,
      [
        {
          text: 'OK',
          onPress: () => {
            goBack();
          },
        },
      ],
    );
  };

  /**
   * Handles form cancellation
   */
  const handleCancel = () => {
    if (isDirty) {
      Alert.alert(
        'Cancelar Edición',
        '¿Estás seguro de que deseas cancelar? Se perderán todos los cambios realizados.',
        [
          {
            text: 'Continuar Editando',
            style: 'cancel',
          },
          {
            text: 'Cancelar',
            style: 'destructive',
            onPress: () => {
              goBack();
            },
          },
        ],
      );
    } else {
      goBack();
    }
  };

  /**
   * Resets form to original values
   */
  const handleReset = () => {
    Alert.alert(
      'Restablecer Cambios',
      '¿Estás seguro de que deseas restablecer todos los campos a sus valores originales?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Restablecer',
          onPress: () => {
            setValue('name', mockProduct.name);
            setValue('description', mockProduct.description);
            setValue('price', mockProduct.price);
            setValue('category', mockProduct.category);
            setValue('imageUrl', mockProduct.imageUrl);
            setValue('stock', mockProduct.stock);
            setValue('isActive', mockProduct.isActive);
          },
        },
      ],
    );
  };

  return (
    <BaseLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text font="headlineMedium">Editar Producto</Text>
          <Button
            title="Cancelar"
            type="outline"
            onPress={handleCancel}
            icon="close"
          />
        </View>

        <Margin top={theme.spacing.lg} />

        {/* Form Card */}
        <Card shadow="md">
          <View style={styles.cardHeader}>
            <Text font="titleSBold" style={styles.sectionTitle}>
              Información del Producto
            </Text>
            {isDirty && (
              <Button
                title="Restablecer"
                type="outline"
                onPress={handleReset}
                icon="refresh"
              />
            )}
          </View>

          <Margin top={theme.spacing.lg} />

          {/* Product Name */}
          <TextInput
            name="name"
            control={control}
            label="Nombre del Producto"
            placeholder="Ingresa el nombre del producto"
            iconLeft="inventory"
          />
          <Margin spacing="sm" />

          {/* Product Description */}
          <TextInput
            name="description"
            control={control}
            label="Descripción"
            placeholder="Describe el producto"
            multiline
            numberOfLines={4}
            iconLeft="description"
          />
          <Margin spacing="sm" />

          {/* Price and Stock Row */}
          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <TextInput
                name="price"
                control={control}
                label="Precio"
                placeholder="0.00"
                keyboardType="numeric"
                iconLeft="attach_money"
              />
            </View>

            <View style={styles.halfWidth}>
              <TextInput
                name="stock"
                control={control}
                label="Stock"
                placeholder="0"
                keyboardType="numeric"
                iconLeft="inventory_2"
              />
            </View>
          </View>
          <Margin spacing="sm" />

          {/* Category */}
          <Select
            name="category"
            control={control}
            label="Categoría"
            placeholder="Selecciona una categoría"
            options={productCategories}
            iconLeft="category"
          />
          <Margin spacing="sm" />

          {/* Image URL */}
          <TextInput
            name="imageUrl"
            control={control}
            label="URL de Imagen (Opcional)"
            placeholder="https://ejemplo.com/imagen.jpg"
            keyboardType="url"
            iconLeft="image"
          />
          <Margin spacing="sm" />

          {/* Active Status */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              name="isActive"
              control={control}
              title="Producto Activo"
            />
          </View>
        </Card>

        <Margin top={theme.spacing.xl} />

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Guardar Cambios"
            type="primary"
            onPress={handleSubmit(onSubmit)}
            icon="content-save"
            disabled={!isValid || !isDirty}
          />
          <Margin top={theme.spacing.md} />
          <Button
            title="Cancelar"
            type="outline"
            onPress={handleCancel}
            icon="close"
          />
        </View>

        <Margin top={theme.spacing.xxl} />
      </ScrollView>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    marginBottom: theme.spacing.sm,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  halfWidth: {
    flex: 1,
  },
  actionButtons: {
    paddingHorizontal: theme.spacing.md,
  },
  checkboxContainer: {},
});
