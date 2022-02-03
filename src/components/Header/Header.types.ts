import { ReactNode } from 'react';
import { GameInfoProps } from '@/App/App.types';

export interface HeaderProps {
  children: ReactNode;
}

export interface HeaderGameInfosProps {
  gameInfos: GameInfoProps;
}
