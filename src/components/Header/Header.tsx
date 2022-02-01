import { HeaderProps } from './Header.types';

export function Header({ children }: HeaderProps): JSX.Element {
  return <header>{children}</header>;
}
