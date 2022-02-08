export type Action =
  | { type: 'CHOOSE_THE_ANSWER'; payload: { nextNumberOfItems: number } }
  | { type: 'CHOOSE_THE_WRONG_ANSWER' }
  | { type: 'TIME_GOES' }
  | { type: 'RESET' };

export interface GameInfoProps {
  stage: number;
  score: number;
  numberOfItems: number;
  remainingTime: number;
}
