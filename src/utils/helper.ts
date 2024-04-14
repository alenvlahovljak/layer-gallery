import queries from '@/store/queries';
import { type Image, Params } from '@/types';

function deepEqual(obj1: Record<string, any>, obj2: Record<string, any>) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (typeof obj1[key] == 'object' && typeof obj2[key] == 'object') {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] != obj2[key]) {
        return false;
      }
    }
  }
  return true;
}

function updateImagesQuery(id: number, liked: boolean, params: Params, search: string) {
  return queries.util.updateQueryData('getImages', { params, search }, (oldPhotos) => {
    const hits = oldPhotos.hits.map((hint) => (hint.id == id ? { ...hint, liked } : hint));
    return { ...oldPhotos, hits };
  });
}

function generateAutoImageGrid(images: Image[]) {
  const columns: Image[][] = [[], [], []];
  const sortedImages = images.slice().sort((a, b) => a.previewHeight - b.previewHeight);

  sortedImages.forEach((image) => {
    const minHeight = Math.min(
      ...columns.map((col) => col.reduce((sum, img) => sum + img.previewHeight, 0))
    );
    const columnIndex = columns.findIndex(
      (col) => col.reduce((sum, img) => sum + img.previewHeight, 0) === minHeight
    );

    columns[columnIndex].push(image);
  });

  return columns;
}

export { deepEqual, updateImagesQuery, generateAutoImageGrid };
