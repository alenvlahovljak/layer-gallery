import { useSelector as useTypedSelector, UseSelector } from 'react-redux';
import type { RootState } from '@/store';

const useSelector: UseSelector<RootState> = useTypedSelector;

export default useSelector;
