import React from 'react';
import * as Yup from 'yup';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text, Button, Card, Margin } from '@components/core';
import { TextInput, Select } from '@components/form';
import { BaseLayout, ProductHeader } from '@components/layout';
import { theme } from '@theme/index';
import { useNavigationProduct } from '@modules/navigation/application/hooks';
import { CreateProductData } from '../../domain/model/product.model';

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

/**
 * CreateProductScreen component
 * Form to create a new product
 */
export default function CreateProductScreen() {
  const { goBack } = useNavigationProduct();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<CreateProductData>({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string()
          .required('El nombre del producto es requerido')
          .min(2, 'El nombre debe tener al menos 2 caracteres'),
        description: Yup.string()
          .required('La descripción es requerida')
          .min(10, 'La descripción debe tener al menos 10 caracteres'),
        price: Yup.number()
          .required('El precio es requerido')
          .min(0.01, 'El precio debe ser mayor a 0'),
        category: Yup.string().required('La categoría es requerida'),
        // imageUrl: Yup.string()
        //   .matches(
        //     /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i,
        //     'Ingresa una URL válida de imagen'
        //   )
        //   .nullable().notRequired(),
        stock: Yup.number()
          .required('El stock es requerido')
          .min(0, 'El stock no puede ser negativo'),
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
    },
  });

  /**
   * Handles form submission
   */
  const onSubmit = (data: CreateProductData) => {
    console.log('Creating product:', data);

    // Here would be the actual product creation logic
    // For now, we'll show a success message and go back
    Alert.alert(
      'Producto Creado',
      `El producto "${data.name}" ha sido creado exitosamente.`,
      [
        {
          text: 'OK',
          onPress: () => {
            reset();
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
    Alert.alert(
      'Cancelar Creación',
      '¿Estás seguro de que deseas cancelar? Se perderán todos los datos ingresados.',
      [
        {
          text: 'Continuar Editando',
          style: 'cancel',
        },
        {
          text: 'Cancelar',
          style: 'destructive',
          onPress: () => {
            reset();
            goBack();
          },
        },
      ],
    );
  };

  return (
    <BaseLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        {/* Header */}
        <ProductHeader
          title="Crear Producto"
          //subtitle={`${filteredProducts.length} productos disponibles`}
          showViewModeToggle={true}
          //viewMode={viewMode}
          onViewModeChange={handleCancel}
          showAddButton={true}
          addButtonTitle="Agregar"
          //onAddPress={handleCancel}
          showCategoryFilters={true}
          // categories={categories}
          // selectedCategory={selectedCategory}
          // onCategorySelect={setSelectedCategory}
        />

        <Margin top={theme.spacing.lg} />

        {/* Form Card */}
        <Card shadow="md">
          <Text font="titleSBold" style={styles.sectionTitle}>
            Información del Producto
          </Text>

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
        </Card>

        <Margin top={theme.spacing.xl} />

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Crear Producto"
            type="primary"
            onPress={handleSubmit(onSubmit)}
            icon="plus"
            disabled={!isValid}
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
});
