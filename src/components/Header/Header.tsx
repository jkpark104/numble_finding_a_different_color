import { HeaderProps, HeaderGameInfosProps } from './Header.types';

export function Header({ children }: HeaderProps): JSX.Element {
  return <header>{children}</header>;
}

Header.Title = function HeaderTitle(): JSX.Element {
  return <h1 className="sr-only">Finding A Different Color</h1>;
};

Header.GameInfos = function GameInfos({ gameInfos }: HeaderGameInfosProps): JSX.Element {
  const { stage, remainingTime, score } = gameInfos;

  return <p>{`스테이지: ${stage}, 남은 시간: ${remainingTime}, 점수: ${score}`}</p>;
};
