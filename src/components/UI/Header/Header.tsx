import type { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '@/hooks';

import Icon from '../Icon/Icon';
import { Container, Likes, NumOfLikes, Childern } from './Header.styled';

const Header: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { images } = useSelector((state) => state.likedImages);

  return (
    <Container>
      <Likes onClick={() => navigate('/liked')}>
        {images.length != 0 && <NumOfLikes>{images.length}</NumOfLikes>}
        <Icon size={36} name="heart" />
      </Likes>
      <Childern>{children}</Childern>
    </Container>
  );
};

export default Header;
