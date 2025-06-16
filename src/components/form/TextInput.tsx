import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Control, useController } from 'react-hook-form';
// Components
import TextInputCore, {
  TextInputProps as TextInputCoreProps,
} from '../core/TextInput';
import { regExpOnlyNumbers } from '@config/regExp';

// -----------------------------------------------------------------------------

interface TextInputProps extends TextInputCoreProps {
  control: Control<any, any>;
  name: string;
}

const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  ({ label, name, control, ...rest }, ref) => {
    const {
      field: { value, onChange },
      fieldState: { error },
    } = useController({ name, control });

    const onChangeText = React.useCallback(
      (text: string) => {
        if (rest.currency) {
          const _formated = `${text}`.replace(/[$\s.,]/g, '');
          if (_formated === '') {
            onChange(_formated);
            return;
          }
          if (!regExpOnlyNumbers.test(_formated)) {
            return;
          }
          onChange(_formated);
          return;
        }
        onChange(text);
      },
      [rest.currency, onChange],
    );

    return (
      <TextInputCore
        ref={ref}
        label={label}
        error={error?.message}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    );
  },
);

export default TextInput;
