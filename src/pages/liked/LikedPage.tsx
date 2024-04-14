import type { FC } from 'react';
import { PAGE_SIZE } from '@/utils';
import { useSelector } from '@/hooks';

import { Link } from 'react-router-dom';
import { Header, Gallery, Icon } from '@/components/UI';

const LikedPage: FC = () => {
  const { images, params } = useSelector((state) => state.likedImages);

  return (
    <>
      <Header>
        <Link to="/">
          <Icon name="arrow-left" />
        </Link>
        Liked Images
      </Header>
      <Gallery
        images={images}
        search={params.search}
        params={{ page: params.page, per_page: PAGE_SIZE }}
      />
    </>
  );
};

export default LikedPage;
