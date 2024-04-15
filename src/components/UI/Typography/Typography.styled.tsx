import styled from '@emotion/styled';

interface PProps {
  $centered?: boolean;
}

export const Paragraph = styled.p<PProps>`
  line-height: 1.75rem;
  margin-left: ${({ $centered }) => ($centered ? 'auto' : '0')};
  margin-right: ${({ $centered }) => ($centered ? 'auto' : '0')};
`;

export const Span = styled.span`
  line-height: 1.5rem;
`;
