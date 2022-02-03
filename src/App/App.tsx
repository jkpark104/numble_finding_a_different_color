import { useReducer } from 'react';
import { initialState, reducer, chooseTheAnswer, chooseTheWrongAnswer } from './appReducer';
import { Header, Board } from '@/components';
import { useTimer, useBoardData, useGameOver } from '@/hooks';

export default function App(): JSX.Element {
  const [gameInfos, dispatch] = useReducer(reducer, initialState);

  const { stage, numberOfItems, remainingTime } = gameInfos;

  useTimer(dispatch, remainingTime);

  useGameOver(dispatch, gameInfos);

  const onClick = (isAnswer: boolean): void => {
    isAnswer ? dispatch(chooseTheAnswer(stage)) : dispatch(chooseTheWrongAnswer());
  };

  const boardData = useBoardData(numberOfItems, stage);

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
