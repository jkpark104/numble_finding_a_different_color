import { useEffect, Dispatch } from 'react';
import { Action } from '@/App/appReducer.types';

export const useTimer = (dispatch: Dispatch<Action>, remainingTime: number): void => {
  useEffect(() => {
    const timerId = setInterval((): void => {
      dispatch({ type: 'TIME_GOES' });
    }, 1000);

    if (remainingTime === 0) dispatch({ type: 'END_GAME' });

    return (): void => clearInterval(timerId);
  }, [dispatch, remainingTime]);
};
