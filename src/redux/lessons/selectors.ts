import { RootState } from '@/redux/store';

export const selectDetails = (state: RootState) => state.lessons.lessons;
export const selectStatus = (state: RootState) => state.lessons.status;
export const selectError = (state: RootState) => state.lessons.Error;
