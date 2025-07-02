import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Color } from '@theme/colors';
import Icon from './Icon';
import Text from './Text';
import { commonStyles } from '@theme/common';
import Margin from './Margin';
import { SPACING } from '@theme/spacing';

export interface CheckboxProps {
  title: string;
  selected?: boolean;
  onChange?: (selected: boolean) => void;
  color?: keyof Color;
  error?: string;
}

export default function Checkbox({
  title,
  selected,
  onChange,
  color = 'primary',
  error,
}: CheckboxProps) {
  return (
    <>
      <View style={commonStyles.row}>
        <TouchableOpacity onPress={() => onChange?.(!selected)}>
          <Icon
            name={selected ? 'checkbox-outline' : 'checkbox-blank-outline'}
            size={SPACING.lg}
            color={error ? 'error' : color}
          />
        </TouchableOpacity>
        <Margin right={4} />
        <Text title={title} />
      </View>
      {error && (
        <Margin top={4}>
          <Text title={error} font="labelSRegular" color="error" />
        </Margin>
      )}
    </>
  );
}
