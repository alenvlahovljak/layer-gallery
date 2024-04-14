import styled from '@emotion/styled';

export const Container = styled.header`
  position: relative;
  width: 100%;
  display: flex;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 48px;
  right: 0;

  :hover {
    cursor: pointer;
  }
`;

export const NumOfLikes = styled.span`
  background: red;
  border-radius: 50%;
  color: white;
  padding: 4px;
  line-height: 60%;
  position: absolute;
  right: 0;
  top: 6px;
  z-index: 1;
`;
