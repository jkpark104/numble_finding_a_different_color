import { BoardProps, ItemProps } from './Board.types';

export function Board({ children }: BoardProps): JSX.Element {
  return <div className="max-w-[22.5rem] flex flex-wrap justify-around">{children}</div>;
}

Board.Item = function ({ className }: ItemProps): JSX.Element {
  return <div className={className} />;
};
