import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from '@/app/lib/definitions';

import { useDispatch, useSelector, useStore } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
