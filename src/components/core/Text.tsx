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
  underline?: boolean;
  font?: keyof FontStyle;
  color?: keyof Color;
  align?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
}

export default function Text({
  title,
  font = 'bodyMedium',
  color = 'primary',
  align,
  underline,
  textTransform,
  children,
  style,
  ...props
}: PropsWithChildren<TextProps>) {
  const finalColor = getColor(color);

  const _textStyles: TextStyle = {
    color: finalColor,
    textAlign: align,
    ...(textTransform && { textTransform }),
    ...(underline && { textDecorationLine: 'underline' }),
  };

  const textStyle = TEXT_STYLES[font];
  const textStyles = [textStyle, _textStyles, style];

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
