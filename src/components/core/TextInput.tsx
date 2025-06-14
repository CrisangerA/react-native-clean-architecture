import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';
import { Icon, Margin, Text } from './index';
import { TEXT_INPUT_STYLES, TextInputType } from '@theme/components';
import { SPACING } from '@theme/spacing';
import { Color } from '@theme/colors';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  type?: keyof TextInputType;
  // icon
  iconLeft?: string;
  iconRight?: string;
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
const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  ({ label, error, type = 'primary', iconLeft, iconRight, ...rest }, ref) => {
    if (rest.editable === false) {
      type = 'disabled';
    }
    if (error) {
      type = 'error';
    }

    const styles = TEXT_INPUT_STYLES[type];

    return (
      <View pointerEvents={rest.pointerEvents}>
        {label && (
          <Margin bottom={4}>
            <Text
              title={label}
              font="bodySRegular"
              color={styles.text.color as keyof Color}
            />
          </Margin>
        )}
        <View style={styles.container}>
          {iconLeft && (
            <View>
              <Icon
                name={iconLeft}
                size={SPACING.lg}
                color={styles.text.color as keyof Color}
              />
            </View>
          )}
          <RNTextInput
            ref={ref}
            style={[
              styles.text,
              iconLeft && localStyles.textIconLeft,
              iconRight && localStyles.textIconRight,
            ]}
            {...rest}
          />
          {iconRight && (
            <View style={localStyles.iconRight}>
              <Icon
                name={iconRight}
                size={SPACING.lg}
                color={styles.text.color as keyof Color}
              />
            </View>
          )}
        </View>
        {error && (
          <Margin top={4}>
            <Text title={error} font="overlineRegular" color="error" />
          </Margin>
        )}
      </View>
    );
  },
);

export default TextInput;

const localStyles = StyleSheet.create({
  textIconLeft: {
    paddingLeft: SPACING.xs,
  },
  iconRight: {
    position: 'absolute',
    right: SPACING.sm,
  },
  textIconRight: {
    paddingRight: SPACING.lg,
  },
});
