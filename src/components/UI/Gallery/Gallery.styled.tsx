import styled from '@emotion/styled';

interface RowProps {
  $loaded: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  opacity: ${({ $loaded }) => ($loaded ? '1' : '0')};
`;

export const Column = styled.div`
  flex: 33.3%;
  max-width: 33.3%;

  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;
