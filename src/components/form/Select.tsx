import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Control, FieldError, useController } from 'react-hook-form';
// Components
import {
  Select as SelectCore,
  SelectProps as SelectPropsCore,
} from '@components/core';

// -----------------------------------------------------------------------------

interface SelectProps extends SelectPropsCore {
  control: Control<any, any>;
  name: string;
}

const Select = React.forwardRef<RNTextInput, SelectProps>(
  ({ label, name, control, ...props }, ref) => {
    const {
      field: { value, onChange },
      fieldState: { error },
    } = useController({ name, control });
    console.log('Error: ', error);

    const errorMessage = React.useMemo(() => {
      if (error === undefined) {
        return error;
      }
      if ('value' in error) {
        const msj = ((error as any)?.value as FieldError)?.message;
        return msj?.replace('.value', '');
      }
      return error?.message;
    }, [error]);

    return (
      <SelectCore
        ref={ref}
        label={label}
        error={errorMessage}
        valueItem={value}
        onChangeValue={onChange}
        {...props}
      />
    );
  },
);

export default Select;
