import React from 'react';
import { TouchableOpacity } from 'react-native';
import RNDatePicker from 'react-native-date-picker';

import TextInput, { TextInputProps } from './TextInput';

interface DatePickerProps extends TextInputProps {
  date: Date;
  setDate: (date: Date) => void;
  mode?: 'time' | 'date' | 'datetime';
}

export default function DatePicker({
  date: initialDate,
  setDate,
  mode,
  ...rest
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        disabled={rest.editable === false}
      >
        <TextInput {...rest} iconRight="calendar-blank" pointerEvents="none" />
      </TouchableOpacity>
      {open && (
        <RNDatePicker
          modal
          mode={mode}
          open={open}
          date={initialDate || new Date()}
          onConfirm={value => {
            setOpen(false);
            setDate(value);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
