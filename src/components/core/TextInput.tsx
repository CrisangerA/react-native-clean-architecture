import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { Margin, Text, TextProps } from './index';
import { TEXT_INPUT_STYLES, TextInputType } from '@theme/components';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  labelProps?: TextProps;
  type?: keyof TextInputType;
}

/**
 * The TextInput component is a customizable input field with label and error
 * message support in a React Native application.
 * @param {TextInputProps}  - 1. `label`: A string that represents the label for
 * the TextInput component.
 * @returns The `TextInput` component is being returned. It is a custom text input
 * component that includes a label, error message, and text input field styled
 * based on the specified type. The component is structured within a `View`
 * container and utilizes styles defined in the `TEXT_INPUT_STYLES` based on the
 * specified type.
 */
export default function TextInput({
  label,
  labelProps,
  error,
  type = 'primary',
  ...props
}: TextInputProps) {
  const styles = TEXT_INPUT_STYLES[type];

  return (
    <View>
      {label && <Text title={label} font="bodyMRegular" {...labelProps} />}
      <View style={styles.container}>
        <RNTextInput style={styles.text} {...props} />
      </View>
      {error && (
        <Margin top={4}>
          <Text title={error} font="overlineRegular" color="error" />
        </Margin>
      )}
    </View>
  );
}
