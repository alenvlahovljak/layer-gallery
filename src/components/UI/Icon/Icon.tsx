import type { FC } from 'react';

import icons, { IconsType } from './icons';

interface IconProps {
  name: keyof IconsType;
  size?: number | string;
  fill?: string;
}

const Icon: FC<IconProps> = ({ name, size = 24, fill }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill={fill} d={icons[name]} />
    </svg>
  );
};

export default Icon;
