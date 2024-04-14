import styled from '@emotion/styled';

interface HTMLImgProps {
  $loaded: boolean;
}

export const Container = styled.div`
  width: fit-content;
  padding: 8px;
  position: relative;

  &:hover img {
    opacity: 0.6;
  }

  :hover > div {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Expand = styled.div`
  z-index: 5;
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0;

  :hover {
    cursor: pointer;
  }
`;

export const Like = styled.div`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

export const HTMLImg = styled.img<HTMLImgProps>`
  display: inline-block;
  vertical-align: middle;
  border-radius: 7px;
  width: 100%;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  opacity: ${({ $loaded }) => ($loaded ? '1' : '0')};
`;
