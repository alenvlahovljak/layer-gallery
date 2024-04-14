import { Component, ErrorInfo, ReactNode } from 'react';
import styled from '@emotion/styled';

import { Icon, Typography } from '@/components/UI';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const Container = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
`;

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Icon name="error" size={48} />
          <Typography>Something went wrong!</Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
