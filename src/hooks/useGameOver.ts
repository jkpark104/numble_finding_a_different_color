import { useEffect, useRef, Dispatch } from 'react';
import { Action, GameInfoProps } from '@/App/appReducer.types';
import { reset } from '@/App/appReducer';
import { showAlert } from '@/utils';

export const useGameOver = (dispatch: Dispatch<Action>, gameInfos: GameInfoProps): void => {
  const isResetOngoing = useRef(false);

  useEffect(() => {
    const { stage, score, remainingTime } = gameInfos;

    if (remainingTime === 0 && !isResetOngoing.current) {
      isResetOngoing.current = true;

      setTimeout(() => {
        showAlert(stage, score);
        dispatch(reset());
        isResetOngoing.current = false;
      }, 0);
    }
  }, [dispatch, gameInfos]);
};
