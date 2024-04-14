import type { FC, PropsWithChildren } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import { Container } from './Layout.styled';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Container>
  );
};

export default Layout;
