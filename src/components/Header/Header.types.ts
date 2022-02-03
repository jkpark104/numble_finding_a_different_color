import { ReactNode } from 'react';
import { GameInfoProps } from '@/App/appReducer.types';

export interface HeaderProps {
  children: ReactNode;
}

export interface HeaderGameInfosProps {
  gameInfos: GameInfoProps;
}
