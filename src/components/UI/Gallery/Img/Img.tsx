import { useState, forwardRef, ImgHTMLAttributes } from 'react';

import { Container, Expand, Like, HTMLImg } from './Img.styled';
import Icon from '../../Icon/Icon';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
  isLiked?: boolean;
  onExpand?: () => void;
  onLike?: () => void;
}

const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ alt, isLiked, onLike, onExpand, ...props }, ref) => {
    const [loaded, setLoaded] = useState(false);

    return (
      <Container>
        {onExpand && (
          <Expand onClick={onExpand}>
            <Icon name="expand" />
          </Expand>
        )}
        {onLike && (
          <Like onClick={onLike}>
            <Icon fill={isLiked ? 'red' : 'gray'} size={64} name="heart" />
          </Like>
        )}
        <HTMLImg ref={ref} $loaded={loaded} alt={alt} onLoad={() => setLoaded(true)} {...props} />
      </Container>
    );
  }
);

Img.displayName = 'Img';

export default Img;
