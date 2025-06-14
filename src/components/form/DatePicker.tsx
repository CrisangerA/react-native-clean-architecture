import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Control, useController } from 'react-hook-form';
// Components
import {
  DatePicker as DatePickerCore,
  DatePickerProps as DatePickerPropsCore,
} from '@components/core';

// -----------------------------------------------------------------------------

interface DatePickerProps extends DatePickerPropsCore {
  control: Control<any, any>;
  name: string;
}

const DatePicker = React.forwardRef<RNTextInput, DatePickerProps>(
  ({ name, control, ...rest }, ref) => {
    const {
      field: { value, onChange },
      fieldState: { error },
    } = useController({ name, control });

    return (
      <DatePickerCore
        ref={ref}
        error={error?.message}
        date={value}
        setDate={onChange}
        {...rest}
      />
    );
  },
);

export default DatePicker;
