import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
// Components
import Icon from './Icon';
// Theme
import { Color } from '@theme/index';
import { getIconButtonStyles, IconButtonType } from '@theme/components';

export interface IconButtonProps extends TouchableOpacityProps {
  /** Function to execute when button is pressed */
  onPress: () => void;
  /** Icon name to display */
  icon: string;
  /** Icon size */
  size?: number;
  /** Icon color */
  color?: keyof Color;
  /** Button style variant */
  type?: keyof IconButtonType;
  /** Loading state */
  isLoading?: boolean;
}

/**
 * IconButton component that provides a customizable touchable button with only an icon
 * @param {() => void} props.onPress - Function to execute when button is pressed
 * @param {string} props.icon - Icon name to display
 * @param {number} [props.size=20] - Icon size
 * @param {keyof Color} [props.color] - Icon color from theme
 * @param {keyof IconButtonType} [props.type='default'] - Button style variant
 * @param {boolean} [props.isLoading=false] - Loading state
 * @returns {JSX.Element} A touchable icon button component
 */
export default function IconButton(props: IconButtonProps) {
  const { onPress, icon, size = 20, isLoading, disabled, ...rest } = props;

  const styles = getIconButtonStyles(props);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={isLoading || disabled}
      {...rest}
    >
      <Icon name={icon} size={size} color={styles.iconColor} />
    </TouchableOpacity>
  );
}
