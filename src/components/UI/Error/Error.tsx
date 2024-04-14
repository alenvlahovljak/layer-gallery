import type { FC } from 'react';
import type { ErrorResponse } from '@/types';

import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import { Container } from './Error.styled';

interface ErrorProps {
  error: Record<string, any> | undefined;
}

const Error: FC<ErrorProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  const { data } = error as { data: ErrorResponse | undefined };

  return (
    <Container>
      <Icon name="error" />
      <h1>{data?.status ?? 500}</h1>
      <Typography>{data?.description ?? 'Something went wrong!'}</Typography>
    </Container>
  );
};

export default Error;
