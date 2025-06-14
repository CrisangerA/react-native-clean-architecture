import React from 'react';

import { Control, useController } from 'react-hook-form';
// Components
import {
  Checkbox as CheckboxCore,
  CheckboxProps as CheckboxCoreProps,
} from '@components/core';

// -----------------------------------------------------------------------------

interface CheckboxProps extends CheckboxCoreProps {
  control: Control<any, any>;
  name: string;
}

function Checkbox({ name, control, ...rest }: CheckboxProps) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <CheckboxCore
      {...rest}
      error={error?.message}
      selected={value}
      onChange={onChange}
    />
  );
}

export default Checkbox;
