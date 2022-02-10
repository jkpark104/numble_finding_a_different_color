import { useReducer, useCallback } from 'react';
import { initialState, reducer, chooseTheAnswer, chooseTheWrongAnswer } from './appReducer';
import { Header, Board } from '@/components';
import { useTimer, useBoardData, useGameOver } from '@/hooks';

export default function App(): JSX.Element {
  const [gameInfos, dispatch] = useReducer(reducer, initialState);

  const { stage, numberOfItems, remainingTime } = gameInfos;

  const onClick = useCallback(
    (isAnswer: boolean): void => {
      isAnswer ? dispatch(chooseTheAnswer(stage)) : dispatch(chooseTheWrongAnswer());
    },
    [stage]
  );

  const boardData = useBoardData(gameInfos);

  useTimer(dispatch, remainingTime);

  useGameOver(dispatch, gameInfos);

  return (
    <>
      <Header>
        <Header.Title />
        <Header.GameInfos gameInfos={gameInfos} />
      </Header>
      <Board>
        <Board.Title />
        <Board.Items length={numberOfItems} boardData={boardData} onClick={onClick} />
      </Board>
    </>
  );
}
