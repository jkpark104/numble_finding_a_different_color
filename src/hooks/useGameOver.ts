import { useEffect, Dispatch } from 'react';
import { Action, GameInfoProps } from '@/App/appReducer.types';
import { reset, finishGame } from '@/App/appReducer';
import { showAlert } from '@/utils';

export const useGameOver = (dispatch: Dispatch<Action>, gameInfos: GameInfoProps): void => {
  const { isStageGoingOn, stage, score, remainingTime } = gameInfos;

  useEffect(() => {
    if (remainingTime === 0) dispatch(finishGame());
  }, [dispatch, remainingTime]);

  useEffect(() => {
    if (isStageGoingOn) return;

    setTimeout(() => {
      showAlert(stage, score);
      dispatch(reset());
    }, 40);
  }, [dispatch, isStageGoingOn, score, stage]);
};
