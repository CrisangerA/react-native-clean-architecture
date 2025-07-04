import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
// Components
import Icon from './Icon';
import { Text } from './index';
// Theme
import { Color } from '@theme/index';
import { ButtonType, getButtonStyles } from '@theme/components';

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  type?: keyof ButtonType;
  isLoading?: boolean;
  color?: keyof Color;
  variant?: 'default' | 'outline';
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
export default function Button(props: ButtonProps) {
  const {
    onPress,
    title,
    isLoading,
    disabled,
    icon,
    iconPosition = 'left',
  } = props;
  const styles = getButtonStyles(props);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      {icon && iconPosition === 'left' && (
        <View>
          <Icon name={icon} color={styles.text.color as keyof Color} />
        </View>
      )}
      <Text
        title={title}
        style={styles.text}
        color={styles.text.color as keyof Color}
      />
      {icon && iconPosition === 'right' && (
        <View>
          <Icon name={icon} color={styles.text.color as keyof Color} />
        </View>
      )}
    </TouchableOpacity>
  );
}
