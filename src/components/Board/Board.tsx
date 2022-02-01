import { BoardProps } from './Board.types';

export function Board({ children }: BoardProps): JSX.Element {
  return <div className="board">{children}</div>;
}

Board.Item = function (): JSX.Element {
  return <div />;
};
