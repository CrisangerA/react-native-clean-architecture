import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { Text } from './index';
import { BUTTON_STYLES, ButtonType } from '@theme/index';
import Icon from './Icon';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  type?: keyof ButtonType;
  isLoading?: boolean;
  // Icon
  icon?: string;
  iconPosition?: 'left' | 'right';
}

/**
 * Button component that provides a customizable touchable button with text
 * @param {() => void} props.onPress - Function to execute when button is pressed
 * @param {string} props.title - Text to display inside the button
 * @param {TextProps} [props.text] - Additional text style props
 * @param {keyof ButtonType} [props.type='primary'] - Button style variant
 * @returns {JSX.Element} A touchable button component
 */
export default function Button({
  onPress,
  title,
  type = 'primary',
  isLoading,
  disabled,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  if (isLoading || disabled) {
    type = 'disabled';
  }
  const styles = BUTTON_STYLES[type];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      {icon && iconPosition === 'left' && (
        <View>
          <Icon name={icon} color={styles.text.color as string} />
        </View>
      )}
      <Text title={title} style={styles.text} />
      {icon && iconPosition === 'right' && (
        <View>
          <Icon name={icon} color={styles.text.color as string} />
        </View>
      )}
    </TouchableOpacity>
  );
}
