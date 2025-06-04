import { ContainerImageStyle } from '.';

export type AvatarType = {
  profile: ContainerImageStyle;
};

export const AVATAR_STYLES: Record<keyof AvatarType, ContainerImageStyle> = {
  profile: {
    container: {},
    image: {},
  },
};
