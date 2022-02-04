import { ReactNode } from 'react';
import { BoardData } from '@/hooks';

export interface BoardProps {
  children: ReactNode;
}

export interface ItemsProps {
  boardData: BoardData;
  length: number;

  onClick: (isAnswer: boolean) => void;
}
