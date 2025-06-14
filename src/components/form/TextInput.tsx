import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Control, useController } from 'react-hook-form';
// Components
import TextInputCore, {
  TextInputProps as TextInputCoreProps,
} from '../core/TextInput';

// -----------------------------------------------------------------------------

interface TextInputProps extends TextInputCoreProps {
  control: Control<any, any>;
  name: string;
}

const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  ({ label, name, control, ...props }, ref) => {
    const {
      field: { value, onChange },
      fieldState: { error },
    } = useController({ name, control });

    return (
      <TextInputCore
        ref={ref}
        label={label}
        error={error?.message}
        value={value}
        onChangeText={onChange}
        {...props}
      />
    );
  },
);

export default TextInput;
