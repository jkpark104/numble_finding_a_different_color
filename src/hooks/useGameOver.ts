import { useEffect, Dispatch } from 'react';
import { Action, GameInfoProps } from '@/App/appReducer.types';
import { reset } from '@/App/appReducer';
import { showAlert } from '@/utils';

export const useGameOver = (dispatch: Dispatch<Action>, gameInfos: GameInfoProps): void => {
  useEffect(() => {
    const { isGameOver, stage, score } = gameInfos;

    if (isGameOver) {
      showAlert(stage, score);
      dispatch(reset());
    }
  }, [dispatch, gameInfos]);
};
