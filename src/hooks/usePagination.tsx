import { useReducer } from 'react';
import { PAGE_SIZE } from '@/utils';
import type { Params } from '@/types';

type Action = { type: 'NEXT_PAGE'; payload: number };

const paramsReducer = (state: Params, action: Action): Params => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

const usePagination = (): [Params, () => void] => {
  const [params, dispatch] = useReducer(paramsReducer, {
    page: 1,
    per_page: PAGE_SIZE
  });

  const nextPage = () => dispatch({ type: 'NEXT_PAGE', payload: params.page + 1 });

  return [params, nextPage];
};

export default usePagination;
