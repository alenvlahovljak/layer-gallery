import styled from '@emotion/styled';

export const Container = styled.header`
  width: 100%;
  display: flex;
  position: relative;
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

export const Childern = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    width: calc(100% - 48px);
  }
`;
