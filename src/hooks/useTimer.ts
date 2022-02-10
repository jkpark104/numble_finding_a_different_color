import { useLayoutEffect, Dispatch } from 'react';
import { timeGoes } from '@/App/appReducer';
import { Action } from '@/App/appReducer.types';

export const useTimer = (dispatch: Dispatch<Action>, remainingTime: number): void => {
  useLayoutEffect(() => {
    const timerId = setTimeout((): void => {
      dispatch(timeGoes());
    }, 1000);

    return (): void => clearTimeout(timerId);
  }, [dispatch, remainingTime]);
};
