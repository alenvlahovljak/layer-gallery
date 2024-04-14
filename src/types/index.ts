import type { Image } from './gallery.types';

interface Pagination<T> {
  total: number;
  totalHits: number;
  hits: T[];
}

interface Params {
  page: number;
  per_page: number;
}

interface ErrorResponse {
  status: number;
  description: string;
}

export type { Pagination, Params, ErrorResponse, Image };
