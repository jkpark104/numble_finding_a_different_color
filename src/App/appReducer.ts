import { Action, GameInfoProps } from './appReducer.types';
import { getNumberOfBoardItem } from '@/utils';

export const initialState = {
  isGameOver: false,
  stage: 1,
  score: 0,
  numberOfItems: 4,
  remainingTime: 15,
};

export const reducer = (state: GameInfoProps, action: Action): GameInfoProps => {
  switch (action.type) {
    case 'CHOOSE_THE_ANSWER':
      return {
        ...state,
        stage: state.stage + 1,
        score: state.remainingTime * state.stage ** 3,
        numberOfItems: action.payload.nextNumberOfItems,
        remainingTime: 15,
      };

    case 'CHOOSE_THE_WRONG_ANSWER':
      return {
        ...state,
        remainingTime: Math.max(0, state.remainingTime - 3),
      };

    case 'END_GAME':
      return {
        ...state,
        isGameOver: true,
      };

    case 'TIME_GOES':
      return {
        ...state,
        remainingTime: Math.max(0, state.remainingTime - 1),
      };

    case 'RESET':
      return { ...initialState };

    default:
      return state;
  }
};

export const chooseTheAnswer = (stage: number): Action => ({
  type: 'CHOOSE_THE_ANSWER',
  payload: { nextNumberOfItems: getNumberOfBoardItem(stage) },
});

export const chooseTheWrongAnswer = (): Action => ({ type: 'CHOOSE_THE_WRONG_ANSWER' });

export const reset = (): Action => ({ type: 'RESET' });
