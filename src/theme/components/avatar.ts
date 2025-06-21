import { horizontalScale } from '@theme/responsive';
import { ContainerImageStyle } from '.';
import { ImageStyle } from 'react-native';

export type AvatarType = {
  profile: ContainerImageStyle;
  avatar: ContainerImageStyle;
  photo: ContainerImageStyle;
  card: ContainerImageStyle;
};

const SIZE_UNIT = 40;

const baseImageStyle: ImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: SIZE_UNIT * 9,
};

export const AVATAR_STYLES: Record<keyof AvatarType, ContainerImageStyle> = {
  avatar: {
    container: {
      width: horizontalScale(SIZE_UNIT * 1.3),
      height: horizontalScale(SIZE_UNIT * 1.3),
    },
    image: {
      ...baseImageStyle,
    },
  },
  profile: {
    container: {
      width: horizontalScale(SIZE_UNIT * 1.5),
      height: horizontalScale(SIZE_UNIT * 1.5),
    },
    image: {
      ...baseImageStyle,
    },
  },
  photo: {
    container: {
      width: horizontalScale(SIZE_UNIT * 1.8),
      height: horizontalScale(SIZE_UNIT * 1.8),
    },
    image: {
      ...baseImageStyle,
    },
  },
  card: {
    container: {
      width: horizontalScale(SIZE_UNIT * 2.2),
      height: horizontalScale(SIZE_UNIT * 2.2),
    },
    image: {
      ...baseImageStyle,
    },
  },
};
