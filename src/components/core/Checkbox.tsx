import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Color } from '@theme/colors';
import Icon from './Icon';
import Text from './Text';
import { commonStyles } from '@theme/common';
import Margin from './Margin';

interface CheckboxProps {
  title: string;
  selected: boolean;
  onChange: (selected: boolean) => void;
  color?: keyof Color;
}

export default function Checkbox({
  title,
  selected,
  onChange,
  color = 'primary',
}: CheckboxProps) {
  const handleChange = React.useCallback((value: boolean) => {
    onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={commonStyles.row}>
      <TouchableOpacity onPress={() => handleChange(!selected)}>
        <Icon
          name={selected ? 'checkbox-outline' : 'checkbox-blank-outline'}
          color={color}
        />
      </TouchableOpacity>
      <Margin right={4} />
      <Text title={title} color={color} />
    </View>
  );
}
