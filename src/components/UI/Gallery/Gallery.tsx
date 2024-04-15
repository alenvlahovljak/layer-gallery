import { useState, FC } from 'react';
import { updateImagesQuery } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { addImage, removeImage } from '@/store/features';
import type { Image, Params } from '@/types';

import Modal from '../Modal/Modal';
import Img from './Img/Img';
import Button from '../Button/Button';
import BusyDots from '../BusyDots/BusyDots';
import Typography from '../Typography/Typography';
import { Row, Column } from './Gallery.styled';

interface GalleryProps {
  images: Image[];
  search: string;
  params: Params;
  loading?: boolean;
  hasMore?: boolean;
  loadMore?: () => void;
}

const Gallery: FC<GalleryProps> = ({ images, loading, search, params, hasMore, loadMore }) => {
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleOnLike = (image: Image | null) => {
    if (!image) {
      return;
    }

    if (image.liked) {
      dispatch(removeImage(image.id));
    } else {
      dispatch(addImage({ image, params: { search, page: params.page } }));
    }

    dispatch(updateImagesQuery(image.id, !image.liked, params, search));
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage ? { ...prevSelectedImage, liked: !image.liked } : null
    );
  };

  function generateImageGrid(images: Image[]) {
    const columns = Math.ceil(images.length / 3);
    const rows = Math.ceil(images.length / columns);

    if (columns == 0 || rows == 0) {
      return <Typography centered={true}>Gallery is empty</Typography>;
    }

    return (
      <Row $loaded={loaded} onLoad={() => setLoaded(true)}>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <Column key={`column-${rowIndex}`}>
            {Array.from({ length: columns }, (_, colIndex) => {
              const index = rowIndex + colIndex * rows;
              const image = images[index];

              if (image) {
                return (
                  <Img
                    key={`image-${index}`}
                    src={image.webformatURL}
                    alt={`${image.user}'s ${image.type}`}
                    isLiked={image.liked}
                    onLike={() => handleOnLike(image)}
                    onExpand={() => setSelectedImage(image)}
                  />
                );
              }

              return null;
            })}
          </Column>
        ))}
      </Row>
    );
  }

  return (
    <>
      <Modal visible={selectedImage != null} onClose={() => setSelectedImage(null)}>
        <Img
          key={selectedImage?.id}
          src={selectedImage?.webformatURL}
          alt={`${selectedImage?.user}'s ${selectedImage?.type}`}
          isLiked={selectedImage?.liked}
          height={500}
          onLike={() => handleOnLike(selectedImage)}
        />
      </Modal>
      {generateImageGrid(images)}
      {/*<Row $loaded={loaded} onLoad={() => setLoaded(true)}>*/}
      {/*  {generateAutoImageGrid(images).map((column, index) => (*/}
      {/*    <Column key={`column-${index}`}>*/}
      {/*      {column.map((image) => (*/}
      {/*        <Img*/}
      {/*          key={`image-${index}`}*/}
      {/*          src={image.webformatURL}*/}
      {/*          alt={`${image.user}'s ${image.type}`}*/}
      {/*          isLiked={image.liked}*/}
      {/*          onLike={() => handleOnLike(image)}*/}
      {/*          onExpand={() => setSelectedImage(image)}*/}
      {/*        />*/}
      {/*      ))}*/}
      {/*    </Column>*/}
      {/*  ))}*/}
      {/*</Row>*/}
      {loading && <BusyDots />}
      {loadMore && hasMore && <Button onClick={loadMore}>Load More</Button>}
    </>
  );
};

export default Gallery;
