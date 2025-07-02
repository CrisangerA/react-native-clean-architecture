import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Text, Button, Margin, Icon } from '@components/core';
import { BaseLayout, ProductHeader } from '@components/layout';
import { commonStyles, theme } from '@theme/index';
import { useNavigationProduct } from '@modules/navigation/application/hooks';
import { ProductRoutes } from '@modules/navigation/domain/model/product-routes';
import { horizontalScale, verticalScale, normalize } from '@theme/responsive';

// Mock data for demonstration
const mockProducts = [
  {
    id: '1',
    name: 'Planta de Tomate',
    description: 'Tomate cherry orgánico perfecto para huertos caseros',
    price: 25,
    category: 'Plantas',
    stock: 15,
    isActive: true,
    imageUrl:
      'https://images.unsplash.com/photo-1592841200221-21e1c4e65746?w=300&h=300&fit=crop',
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4.8,
    isPopular: true,
  },
  {
    id: '2',
    name: 'Fertilizante Orgánico',
    description: 'Nutrientes naturales para un crecimiento saludable',
    price: 18,
    category: 'Fertilizantes',
    stock: 32,
    isActive: true,
    imageUrl:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4.6,
    isPopular: false,
  },
  {
    id: '3',
    name: 'Kit de Herramientas',
    description: 'Set completo de herramientas para jardinería',
    price: 45,
    category: 'Herramientas',
    stock: 8,
    isActive: true,
    imageUrl:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4.9,
    isPopular: true,
  },
  {
    id: '4',
    name: 'Semillas de Albahaca',
    description: 'Semillas premium de albahaca italiana',
    price: 12,
    category: 'Semillas',
    stock: 50,
    isActive: true,
    imageUrl:
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=300&h=300&fit=crop',
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4.7,
    isPopular: false,
  },
];

const categories = [
  { id: 'Todos', name: 'Todos' },
  { id: 'Plantas', name: 'Plantas' },
  { id: 'Fertilizantes', name: 'Fertilizantes' },
  { id: 'Herramientas', name: 'Herramientas' },
  { id: 'Semillas', name: 'Semillas' },
];

/**
 * ProductListScreen component
 * Displays a list of products with CRUD operations
 */
export default function ProductListScreen() {
  const { navigate } = useNavigationProduct();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = mockProducts.filter(
    product =>
      selectedCategory === 'Todos' || product.category === selectedCategory,
  );

  /**
   * Renders product rating stars
   */
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="star" size={12} color="secondary" />);
    }

    if (hasHalfStar) {
      stars.push(
        <Icon key="half" name="star-half-full" size={12} color="secondary" />,
      );
    }

    return (
      <View style={styles.ratingContainer}>
        {stars}
        <Text font="bodySRegular" color="onSurface" style={styles.ratingText}>
          {rating}
        </Text>
      </View>
    );
  };

  /**
   * Renders individual product item in grid mode
   */
  const renderProductGridItem = ({
    item,
  }: {
    item: (typeof mockProducts)[0];
  }) => (
    <TouchableOpacity
      style={styles.productGridCard}
      onPress={() =>
        navigate(ProductRoutes.ProductDetail, { productId: item.id })
      }
      activeOpacity={0.8}
    >
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        {item.isPopular && (
          <View style={styles.popularBadge}>
            <Icon name="fire" size={12} color="onSecondary" />
            <Text
              font="bodySRegular"
              color="onSecondary"
              style={styles.popularText}
            >
              Popular
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.favoriteButton} onPress={() => {}}>
          <Icon name="heart-outline" size={16} color="onSurface" />
        </TouchableOpacity>
      </View>

      <View style={styles.productGridInfo}>
        <Text font="titleSBold" numberOfLines={1} style={styles.productName}>
          {item.name}
        </Text>
        <Margin top={theme.spacing.xs} />
        {renderRating(item.rating)}
        <Margin top={theme.spacing.xs} />
        <View style={styles.priceStockRow}>
          <Text font="titleBold" color="primary">
            ${item.price}
          </Text>
          <View style={styles.stockBadge}>
            <Text font="bodySRegular" color="onSurface">
              {item.stock}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  /**
   * Renders individual product item in list mode
   */
  const renderProductListItem = ({
    item,
  }: {
    item: (typeof mockProducts)[0];
  }) => (
    <TouchableOpacity
      style={styles.productListCard}
      onPress={() =>
        navigate(ProductRoutes.ProductDetail, { productId: item.id })
      }
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.productListImage} />

      <View style={styles.productListInfo}>
        <View style={styles.productListHeader}>
          <Text font="titleSBold" numberOfLines={1}>
            {item.name}
          </Text>
          {item.isPopular && (
            <View style={styles.popularBadgeSmall}>
              <Icon name="fire" size={10} color="onSecondary" />
            </View>
          )}
        </View>

        <Margin top={theme.spacing.xs} />
        <Text font="bodyRegular" color="onSurface" numberOfLines={2}>
          {item.description}
        </Text>

        <Margin top={theme.spacing.sm} />
        <View style={styles.productListMeta}>
          <View>
            {renderRating(item.rating)}
            <Margin top={theme.spacing.xs} />
            <Text font="titleBold" color="primary">
              ${item.price}
            </Text>
          </View>

          <View style={styles.productListActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() =>
                navigate(ProductRoutes.EditProduct, { productId: item.id })
              }
            >
              <Icon name="pencil" size={16} color="primary" />
            </TouchableOpacity>
            <View style={styles.stockInfo}>
              <Icon name="package-variant" size={14} color="onSurface" />
              <Text
                font="bodySRegular"
                color="onSurface"
                style={styles.stockText}
              >
                {item.stock}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  /**
   * Renders empty state when no products
   */
  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.emptyIconContainer}>
        <Icon name="sprout" size={48} color="primary" />
      </View>
      <Margin top={theme.spacing.lg} />
      <Text font="headlineSMedium" align="center" color="onSurface">
        No hay productos
      </Text>
      <Margin top={theme.spacing.md} />
      <Text font="bodyRegular" color="onSurface" align="center">
        Comienza agregando tu primer producto para tu jardín
      </Text>
      <Margin top={theme.spacing.lg} />
      <Button
        title="Agregar Producto"
        type="primary"
        onPress={() => navigate(ProductRoutes.CreateProduct)}
        icon="plus"
      />
    </View>
  );

  return (
    <BaseLayout style={styles.container}>
      {/* Header */}
      <ProductHeader
        title="Mi Jardín"
        subtitle={`${filteredProducts.length} productos disponibles`}
        showViewModeToggle={true}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showAddButton={true}
        addButtonTitle="Agregar"
        onAddPress={() => navigate(ProductRoutes.CreateProduct)}
        showCategoryFilters={true}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Products List */}
      <FlatList
        data={filteredProducts}
        renderItem={
          viewMode === 'grid' ? renderProductGridItem : renderProductListItem
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        numColumns={viewMode === 'grid' ? 2 : 1}
        key={viewMode} // Force re-render when view mode changes
        columnWrapperStyle={viewMode === 'grid' ? styles.gridRow : undefined}
        ItemSeparatorComponent={() => <Margin top={theme.spacing.md} />}
        ListEmptyComponent={renderEmptyState}
      />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 0,
  },

  listContainer: {
    flexGrow: 1,
    paddingHorizontal: horizontalScale(16),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(32),
  },
  gridRow: {
    justifyContent: 'space-between',
  },
  // Grid Mode Styles
  productGridCard: {
    ...commonStyles.card,
    width: '48%',
    backgroundColor: theme.colors.surface,
    borderRadius: normalize(16),
    overflow: 'hidden',
    padding: theme.spacing.xs,
    paddingTop: 0,
  },
  productImageContainer: {
    position: 'relative',
    height: verticalScale(120),
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  popularBadge: {
    position: 'absolute',
    top: verticalScale(8),
    left: horizontalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(2),
    borderRadius: normalize(12),
    gap: horizontalScale(2),
  },
  popularText: {
    fontSize: normalize(10),
  },
  favoriteButton: {
    position: 'absolute',
    top: verticalScale(8),
    right: horizontalScale(8),
    width: horizontalScale(32),
    height: verticalScale(32),
    borderRadius: normalize(16),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productGridInfo: {
    padding: horizontalScale(12),
  },
  productName: {
    fontSize: normalize(14),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(2),
  },
  ratingText: {
    marginLeft: horizontalScale(4),
    fontSize: normalize(10),
  },
  priceStockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockBadge: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(2),
    borderRadius: normalize(8),
  },
  // List Mode Styles
  productListCard: {
    ...commonStyles.card,
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: normalize(12),
    padding: horizontalScale(12),
  },
  productListImage: {
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: normalize(8),
    resizeMode: 'cover',
  },
  productListInfo: {
    flex: 1,
    marginLeft: horizontalScale(12),
  },
  productListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  popularBadgeSmall: {
    width: horizontalScale(16),
    height: verticalScale(16),
    borderRadius: normalize(8),
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productListMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  productListActions: {
    alignItems: 'flex-end',
    gap: verticalScale(8),
  },
  actionButton: {
    width: horizontalScale(32),
    height: verticalScale(32),
    borderRadius: normalize(16),
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  stockText: {
    fontSize: normalize(10),
  },
  // Empty State Styles
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(32),
  },
  emptyIconContainer: {
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: normalize(40),
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
