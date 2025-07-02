import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput as RNTextInput,
} from 'react-native';
// Components
import Text from './Text';
import { Modal } from '@components/layout';
import TextInput, { TextInputProps } from './TextInput';
// Theme
import { theme, hp } from '@theme/index';

export interface Item {
  label: string;
  value: string;
}

export interface SelectProps extends TextInputProps {
  labelModal?: string;
  options: Item[];
  onChangeValue?: (item: Item) => void;
  valueItem?: Item;
}

const Select = React.forwardRef<RNTextInput, SelectProps>(
  ({ labelModal, options, valueItem: value, onChangeValue, ...rest }, ref) => {
    const [visible, setVisible] = React.useState(false);

    const selected = React.useMemo(() => {
      return options.find(option => option.value === value?.value)?.label || '';
    }, [value, options]);

    return (
      <>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          disabled={rest.editable === false}
        >
          <TextInput
            ref={ref}
            value={selected}
            iconRight="menu-swap"
            pointerEvents="none"
            {...rest}
          />
        </TouchableOpacity>
        {/* Modal para seleccionar */}
        {visible && (
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
                      onChangeValue?.(option);
                      setVisible(!visible);
                    }}
                  >
                    <Text
                      title={option.label}
                      font="bodySRegular"
                      numberOfLines={1}
                      color={value?.value === option.value ? 'primary' : 'text'}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </Modal>
        )}
      </>
    );
  },
);
export default Select;

const styles = StyleSheet.create({
  // Modal
  container: {
    maxHeight: hp(60),
  },
  select: {
    paddingVertical: theme.spacing.lg,
  },
});
