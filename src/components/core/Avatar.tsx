import React from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import { horizontalScale, AVATAR_STYLES, AvatarType } from '@theme/index';

interface AvatarProps {
  source: ImageSourcePropType;
  size?: number;
  type?: keyof AvatarType;
}

const Avatar: React.FC<AvatarProps> = ({
  source,
  size = 50,
  type = 'profile',
}) => {
  const imageSize = React.useMemo(() => {
    const realSize = horizontalScale(size);
    return {
      width: realSize,
      height: realSize,
      borderRadius: realSize * 0.5,
    };
  }, [size]);

  const styles = AVATAR_STYLES[type];
  return (
    <View style={styles.container}>
      <Image source={source} style={[styles.image, imageSize]} />
    </View>
  );
};

export default Avatar;
