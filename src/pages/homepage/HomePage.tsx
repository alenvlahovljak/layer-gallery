import { useState, FC } from 'react';
import { useDebounce, usePagination } from '@/hooks';
import { useGetImagesQuery } from '@/store';

import { Header, Input, Error, Gallery } from '@/components/UI';

const HomePage: FC = () => {
  const [params, nextPage] = usePagination();
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce<string>(search, 700);

  const {
    isLoading,
    isFetching,
    data: images,
    error
  } = useGetImagesQuery({ search: debouncedSearch, params }, { refetchOnMountOrArgChange: true });

  const renderGallery = () => {
    if (isLoading) {
      return null;
    }

    if (!images) {
      return <Error error={error} />;
    }

    return (
      <Gallery
        loading={isFetching}
        images={images.hits}
        hasMore={params.page < images.total}
        search={search}
        params={params}
        loadMore={nextPage}
      />
    );
  };

  return (
    <>
      <Header>
        <Input placeholder="Search gallery..." value={search} onChange={setSearch} />
      </Header>
      {renderGallery()}
    </>
  );
};

export default HomePage;
