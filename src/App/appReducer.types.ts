export type Action =
  | { type: 'CHOOSE_THE_ANSWER'; payload: { nextNumberOfItems: number } }
  | { type: 'CHOOSE_THE_WRONG_ANSWER' }
  | { type: 'END_GAME' }
  | { type: 'TIME_GOES' }
  | { type: 'RESET' };

export interface GameInfoProps {
  isGameOver: boolean;
  stage: number;
  score: number;
  numberOfItems: number;
  remainingTime: number;
}
