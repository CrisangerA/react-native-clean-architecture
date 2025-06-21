import React from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
// Theme
import { horizontalScale } from '@theme/index';
import { AVATAR_STYLES, AvatarType } from '@theme/components';

interface AvatarProps {
  source?: ImageSourcePropType;
  size?: number;
  type?: keyof AvatarType;
}

const Avatar: React.FC<AvatarProps> = ({
  source = { uri: 'https://cdn2.thecatapi.com/images/ebv.jpg' },
  size,
  type = 'profile',
}) => {
  const imageSize = React.useMemo(() => {
    if (!size) {
      return;
    }
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
      <Image
        source={source}
        style={[styles.image, imageSize ? imageSize : {}]}
      />
    </View>
  );
};

export default Avatar;
