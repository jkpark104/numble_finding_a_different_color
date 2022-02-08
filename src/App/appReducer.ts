import { Action, GameInfoProps } from './appReducer.types';
import { INITIAL_NUMBER_OF_BOARD_ITEMS, MAX_LIMIT_SECONDS, ONE_SECOND } from './appConstants';
import { getNumberOfBoardItem } from '@/utils';

export const initialState = {
  stage: 1,
  score: 0,
  numberOfItems: INITIAL_NUMBER_OF_BOARD_ITEMS,
  remainingTime: MAX_LIMIT_SECONDS,
};

export const reducer = (state: GameInfoProps, action: Action): GameInfoProps => {
  switch (action.type) {
    case 'CHOOSE_THE_ANSWER':
      return {
        ...state,
        stage: state.stage + 1,
        score: state.remainingTime * state.stage ** 3,
        numberOfItems: action.payload.nextNumberOfItems,
        remainingTime: MAX_LIMIT_SECONDS,
      };

    case 'CHOOSE_THE_WRONG_ANSWER':
      return {
        ...state,
        remainingTime: Math.max(0, state.remainingTime - 3 * ONE_SECOND),
      };

    case 'TIME_GOES':
      return {
        ...state,
        remainingTime: Math.max(0, state.remainingTime - ONE_SECOND),
      };

    case 'RESET':
      return { ...initialState };

    default:
      return state;
  }
};

export const chooseTheAnswer = (stage: number): Action => ({
  type: 'CHOOSE_THE_ANSWER',
  payload: { nextNumberOfItems: getNumberOfBoardItem(stage + 1) },
});

export const chooseTheWrongAnswer = (): Action => ({ type: 'CHOOSE_THE_WRONG_ANSWER' });

export const timeGoes = (): Action => ({ type: 'TIME_GOES' });

export const reset = (): Action => ({ type: 'RESET' });
