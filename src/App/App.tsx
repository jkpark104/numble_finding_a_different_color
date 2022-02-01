import React, { useState } from 'react';
import { Header, Board } from '@/components';

function App(): JSX.Element {
  const info = {
    stage: 1,
    score: 0,
  };
  const [timer, setTimer] = useState<number>(15);

  return (
    <>
      <Header>
        <h1 className="title">Finding A Different Color</h1>
        <p>{`스테이지: ${info.stage}, 남은 시간: ${timer}, 점수: ${info.score}`}</p>
      </Header>
      <Board>
        <Board.Item />
        <Board.Item />
        <Board.Item />
        <Board.Item />
        <Board.Item />
      </Board>
    </>
  );
}

export default App;
