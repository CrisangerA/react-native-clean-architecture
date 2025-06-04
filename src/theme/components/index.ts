import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export * from './button';
export * from './text-input';
export * from './text';
export * from './common';
export * from './avatar';

export type ContainerTextStyle = {
  container: ViewStyle;
  text: TextStyle;
};

export type ContainerImageStyle = {
  container: ViewStyle;
  image: ImageStyle;
};
