import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
// Components
import Text from './Text';
import { Modal } from '@components/layout';
import TextInput, { TextInputProps } from './TextInput';
// Theme
import { hp } from '@theme/responsive';
import { SPACING } from '@theme/spacing';

export interface Item {
  label: string;
  value: string;
}

interface SelectProps extends TextInputProps {
  labelModal?: string;
  options: Item[];
  disabled?: boolean;
}

export default function Select({
  labelModal,
  options,
  disabled,
  value,
  //onChange,
  ...rest
}: SelectProps) {
  const [visible, setVisible] = React.useState(false);

  const selected = React.useMemo(() => {
    return options.find(option => option.value === value)?.label || '';
  }, [value, options]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        disabled={disabled}
      >
        <TextInput
          iconRight="chevron-down"
          {...rest}
          value={selected}
          pointerEvents="none"
          editable={!disabled}
        />
      </TouchableOpacity>
      {/* Modal para seleccionar */}
      <Modal
        title={labelModal || rest.label}
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        icon={rest.iconLeft || rest.iconRight}
      >
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          >
            {options.map((option, index) => (
              <TouchableOpacity
                style={styles.select}
                key={`Option-${index}`}
                onPress={() => {
                  //onChange(option.value);
                  setVisible(!visible);
                }}
              >
                <Text
                  title={option.label}
                  font="bodySRegular"
                  numberOfLines={1}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // Modal
  container: {
    maxHeight: hp(60),
  },
  select: {
    paddingVertical: SPACING.lg,
  },
});
