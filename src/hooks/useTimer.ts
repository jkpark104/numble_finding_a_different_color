import { useEffect, Dispatch } from 'react';
import { endGame, timeGoes } from '@/App/appReducer';
import { Action } from '@/App/appReducer.types';

export const useTimer = (dispatch: Dispatch<Action>, remainingTime: number): void => {
  useEffect(() => {
    const timerId = setInterval((): void => {
      dispatch(timeGoes());
    }, 1000);

    if (remainingTime === 0) dispatch(endGame());

    return (): void => clearInterval(timerId);
  }, [dispatch, remainingTime]);
};
