import {
  TextStyle,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import { PropsWithChildren } from 'react';
import { Color, getColor } from '@theme/index';
import { TEXT_STYLES, FontStyle } from '@theme/components';

export interface TextProps extends RNTextProps {
  title?: string;
  textDecoration?: TextStyle['textDecorationLine'];
  font?: keyof FontStyle;
  color?: keyof Color;
  align?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
}

export default function Text({
  title,
  font = 'bodyRegular',
  color = 'text',
  align,
  textDecoration,
  textTransform,
  children,
  style: overrideStyle,
  ...props
}: PropsWithChildren<TextProps>) {
  const finalColor = getColor(color);

  const customStyles: TextStyle = {
    color: finalColor,
    textTransform,
    ...(align && { textAlign: align }),
    ...(textDecoration && { textDecorationLine: textDecoration }),
  };

  const textStyle = TEXT_STYLES[font];
  const textStyles = [textStyle, customStyles, overrideStyle];

  if (children) {
    return (
      <RNText style={textStyles} {...props}>
        {title}
        {children}
      </RNText>
    );
  }

  return (
    <RNText style={textStyles} {...props}>
      {title}
    </RNText>
  );
}
