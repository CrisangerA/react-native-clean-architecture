import React from 'react';
import { TouchableOpacity, TextInput as RNTextInput } from 'react-native';
import RNDatePicker from 'react-native-date-picker';

import TextInput, { TextInputProps } from './TextInput';

export interface DatePickerProps extends TextInputProps {
  date?: Date;
  setDate?: (date: Date) => void;
  mode?: 'time' | 'date' | 'datetime';
}

const DatePicker = React.forwardRef<RNTextInput, DatePickerProps>(
  ({ date, setDate, mode, ...rest }, ref) => {
    const [open, setOpen] = React.useState(false);

    // useImperativeHandle(
    //   ref,
    //   () => {
    //     return {
    //       focus: () => {
    //         setOpen(true);
    //       },
    //     };
    //   },
    //   [],
    // );

    return (
      <>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          disabled={rest.editable === false}
        >
          <TextInput
            ref={ref}
            iconRight="calendar-blank"
            pointerEvents="none"
            value={date?.toDateString()}
            {...rest}
          />
        </TouchableOpacity>
        {open && (
          <RNDatePicker
            modal
            mode={mode}
            open={open}
            date={date || new Date()}
            onConfirm={value => {
              setOpen(false);
              setDate?.(value);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        )}
      </>
    );
  },
);

export default DatePicker;
