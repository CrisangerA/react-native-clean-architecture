import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text, TextProps } from './index';
import { BUTTON_STYLES, ButtonType } from '@theme/index';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  type?: keyof ButtonType;
  text?: TextProps;
  isLoading?: boolean;
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
  text,
  type = 'primary',
}: ButtonProps) {
  const styles = BUTTON_STYLES[type];

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text title={title} style={styles.text} {...text} />
    </TouchableOpacity>
  );
}
