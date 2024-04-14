import type { FC, PropsWithChildren } from 'react';

import { Paragraph } from './Typography.styled';

const Typography: FC<PropsWithChildren> = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default Typography;
