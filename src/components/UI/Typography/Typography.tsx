import type { FC, PropsWithChildren } from 'react';

import { Paragraph, Span } from './Typography.styled';

interface TypographyProps {
  centered?: boolean;
}

const Typography: FC<PropsWithChildren<TypographyProps>> & { Text: FC<PropsWithChildren> } = ({
  children,
  centered
}) => {
  return <Paragraph $centered={centered}>{children}</Paragraph>;
};

const Text: FC<PropsWithChildren> = ({ children }) => {
  return <Span>{children}</Span>;
};

Typography.Text = Text;

export default Typography;
