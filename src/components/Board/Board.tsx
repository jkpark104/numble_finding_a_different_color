import { BoardProps, ItemsProps } from './Board.types';

export function Board({ children }: BoardProps): JSX.Element {
  return <div className="max-w-[22.5rem] flex flex-wrap justify-around">{children}</div>;
}

Board.Title = function BoardTitle(): JSX.Element {
  return <h2 className="sr-only">Board</h2>;
};

Board.Items = function BoardItem({ boardData, length, onClick }: ItemsProps): JSX.Element {
  const { itemSize, indexOfanswer, rgbOfAnswer, rgbOfWrongAnswer } = boardData;

  return (
    <>
      {Array.from({ length }, (_, index) => (
        <div
          key={index}
          className="m-[0.125rem]"
          style={{
            width: itemSize,
            height: itemSize,
            backgroundColor: index === indexOfanswer ? rgbOfAnswer : rgbOfWrongAnswer,
          }}
          onClick={(): void => onClick(index === indexOfanswer)}
        />
      ))}
    </>
  );
};
