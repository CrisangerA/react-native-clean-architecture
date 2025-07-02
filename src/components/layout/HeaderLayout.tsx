import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Margin, IconButton } from '@components/core';
import { theme } from '@theme/index';
import { horizontalScale, verticalScale, normalize } from '@theme/responsive';

/**
 * Props interface for ProductHeader component
 */
interface ProductHeaderProps {
  /** Main title displayed in the header */
  title: string;
  /** Subtitle or description text */
  subtitle?: string;
  /** Show view mode toggle button (grid/list) */
  showViewModeToggle?: boolean;
  /** Current view mode */
  viewMode?: 'grid' | 'list';
  /** Callback when view mode changes */
  onViewModeChange?: (mode: 'grid' | 'list') => void;
  /** Show add/create button */
  showAddButton?: boolean;
  /** Add button title */
  addButtonTitle?: string;
  /** Callback when add button is pressed */
  onAddPress?: () => void;
  /** Show category filters */
  showCategoryFilters?: boolean;
  /** Array of categories for filtering */
  categories?: Array<{ id: string; name: string }>;
  /** Selected category ID */
  selectedCategory?: string;
  /** Callback when category is selected */
  onCategorySelect?: (categoryId: string) => void;
  /** Custom actions to display in header */
  customActions?: React.ReactNode;
}

/**
 * Reusable product header component for product-related screens
 * Provides title, subtitle, view mode toggle, add button, and category filters
 */
export default function ProductHeader({
  title,
  subtitle,
  showViewModeToggle = false,
  viewMode = 'grid',
  onViewModeChange,
  showAddButton = false,
  onAddPress,
  showCategoryFilters = false,
  categories = [],
  selectedCategory = 'all',
  onCategorySelect,
  customActions,
}: ProductHeaderProps) {
  /**
   * Renders a category filter chip
   */
  const renderCategoryChip = (category: { id: string; name: string }) => {
    const isSelected = selectedCategory === category.id;
    return (
      <TouchableOpacity
        key={category.id}
        style={[styles.categoryChip, isSelected && styles.categoryChipActive]}
        onPress={() => onCategorySelect?.(category.id)}
      >
        <Text font="bodyMedium" color={isSelected ? 'onPrimary' : 'onSurface'}>
          {category.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.header}>
      {/* Header Top Section */}
      <View style={styles.headerTop}>
        <View style={styles.titleContainer}>
          <Text font="headlineMedium" color="onSurface">
            {title}
          </Text>
          {subtitle && (
            <Text font="bodyRegular" color="onSurface">
              {subtitle}
            </Text>
          )}
        </View>

        <View style={styles.headerActions}>
          {/* View Mode Toggle */}
          {showViewModeToggle && onViewModeChange && (
            <IconButton
              type="default"
              icon={viewMode === 'grid' ? 'view-list' : 'view-grid'}
              size={20}
              onPress={() =>
                onViewModeChange(viewMode === 'grid' ? 'list' : 'grid')
              }
            />
          )}

          {/* Custom Actions */}
          {customActions}

          {/* Add Button */}
          {showAddButton && onAddPress && (
            <IconButton type="primary" onPress={onAddPress} icon="plus" />
          )}
        </View>
      </View>

      {/* Category Filters */}
      {showCategoryFilters && categories.length > 0 && (
        <>
          <Margin top={theme.spacing.md} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map(renderCategoryChip)}
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(16),
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.surface,
  },
  headerTop: {
    paddingHorizontal: horizontalScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
    marginRight: horizontalScale(16),
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
  },

  categoriesContainer: {
    paddingHorizontal: theme.spacing.md,
  },
  categoryChip: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    marginRight: horizontalScale(8),
    borderRadius: normalize(20),
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.onSurface,
  },
  categoryChipActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
});
