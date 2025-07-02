import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Button, Card, Margin, Icon, Avatar } from '@components/core';
import { BaseLayout } from '@components/layout';
import { theme, commonStyles } from '@theme/index';
import { useNavigationProduct } from '@modules/navigation/application/hooks';
import { ProductRoutes } from '@modules/navigation/domain/model/product-routes';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductStackParamsList } from '@modules/navigation/domain/model/product-routes';

type ProductDetailRouteProp = RouteProp<
  ProductStackParamsList,
  ProductRoutes.ProductDetail
>;

// Mock product data
const mockProduct = {
  id: '1',
  name: 'iPhone 15 Pro',
  description:
    'El iPhone 15 Pro cuenta con un diseño de titanio de grado aeroespacial, el chip A17 Pro más potente y un sistema de cámara profesional avanzado. Incluye una pantalla Super Retina XDR de 6.1 pulgadas con ProMotion y Always-On.',
  price: 999,
  category: 'Electronics',
  stock: 25,
  isActive: true,
  imageUrl: 'https://via.placeholder.com/300x300',
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-20'),
};

/**
 * ProductDetailScreen component
 * Displays detailed information about a specific product
 */
export default function ProductDetailScreen() {
  const route = useRoute<ProductDetailRouteProp>();
  const { navigate, goBack } = useNavigationProduct();
  const { productId } = route.params;

  /**
   * Handles product deletion with confirmation
   */
  const handleDeleteProduct = () => {
    Alert.alert(
      'Eliminar Producto',
      '¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            // Here would be the actual delete logic
            console.log('Deleting product:', productId);
            goBack();
          },
        },
      ],
    );
  };

  /**
   * Formats date to readable string
   */
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <BaseLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with back button */}
        <View style={styles.header}>
          <Button
            title="Volver"
            variant="outline"
            onPress={goBack}
            icon="arrow-left"
          />
          <View style={styles.headerActions}>
            <Button
              title="Editar"
              type="primary"
              onPress={() => navigate(ProductRoutes.EditProduct, { productId })}
              icon="pencil"
            />
          </View>
        </View>

        <Margin top={theme.spacing.lg} />

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Avatar source={{ uri: mockProduct.imageUrl }} size={120} />
        </View>

        <Margin top={theme.spacing.xl} />

        {/* Product Info Card */}
        <Card shadow="md">
          <Text font="headlineSMedium">{mockProduct.name}</Text>
          <Margin top={theme.spacing.md} />
          <Text font="headlineMedium" color="primary">
            ${mockProduct.price}
          </Text>
          <Margin top={theme.spacing.md} />
          <Text font="bodyRegular" color="onSurface">
            {mockProduct.description}
          </Text>
        </Card>

        <Margin top={theme.spacing.lg} />

        {/* Product Details Card */}
        <Card shadow="md">
          <Text font="titleSBold" style={styles.sectionTitle}>
            Detalles del Producto
          </Text>
          <Margin top={theme.spacing.md} />

          <View style={styles.detailRow}>
            <View style={styles.detailLabel}>
              <Icon name="tag" size={20} color="shadow" />
              <Text
                font="bodyRegular"
                color="onSurface"
                style={styles.labelText}
              >
                Categoría
              </Text>
            </View>
            <Text font="bodyRegular" color="onSurface">
              {mockProduct.category}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailLabel}>
              <Icon name="package-variant" size={20} color="shadow" />
              <Text
                font="bodyRegular"
                color="onSurface"
                style={styles.labelText}
              >
                Stock
              </Text>
            </View>
            <Text font="bodyRegular" color="onSurface">
              {mockProduct.stock} unidades
            </Text>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailLabel}>
              <Icon
                name="circle"
                size={20}
                color={mockProduct.isActive ? 'primary' : 'error'}
              />
              <Text
                font="bodyRegular"
                color="onSurface"
                style={styles.labelText}
              >
                Estado
              </Text>
            </View>
            <Text
              font="bodyRegular"
              color={mockProduct.isActive ? 'primary' : 'error'}
            >
              {mockProduct.isActive ? 'Activo' : 'Inactivo'}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailLabel}>
              <Icon name="calendar" size={20} color="shadow" />
              <Text
                font="bodyRegular"
                color="onSurface"
                style={styles.labelText}
              >
                Creado
              </Text>
            </View>
            <Text font="bodyRegular" color="onSurface">
              {formatDate(mockProduct.createdAt)}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailLabel}>
              <Icon name="update" size={20} color="shadow" />
              <Text
                font="bodyRegular"
                color="onSurface"
                style={styles.labelText}
              >
                Actualizado
              </Text>
            </View>
            <Text font="bodyRegular" color="onSurface">
              {formatDate(mockProduct.updatedAt)}
            </Text>
          </View>
        </Card>

        <Margin top={theme.spacing.xl} />

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Editar Producto"
            type="primary"
            onPress={() => navigate(ProductRoutes.EditProduct, { productId })}
            icon="pencil"
          />
          <Margin top={theme.spacing.md} />
          <Button
            title="Eliminar Producto"
            variant="outline"
            onPress={handleDeleteProduct}
            icon="delete"
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
  headerActions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  imageContainer: {
    ...commonStyles.centerContainer,
  },
  productImage: {
    borderRadius: 12,
  },
  sectionTitle: {
    marginBottom: theme.spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.shadow,
  },
  detailLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  labelText: {
    marginLeft: theme.spacing.sm,
  },
  actionButtons: {
    paddingHorizontal: theme.spacing.md,
  },
});
