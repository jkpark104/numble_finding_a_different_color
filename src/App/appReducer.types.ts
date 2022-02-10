export type Action =
  | { type: 'CHOOSE_THE_ANSWER'; payload: { nextNumberOfItems: number } }
  | { type: 'CHOOSE_THE_WRONG_ANSWER' }
  | { type: 'TIME_GOES' }
  | { type: 'RESET' }
  | { type: 'FINISH_STAGE' };

export interface GameInfoProps {
  isStageGoingOn: boolean;
  stage: number;
  score: number;
  numberOfItems: number;
  remainingTime: number;
}
