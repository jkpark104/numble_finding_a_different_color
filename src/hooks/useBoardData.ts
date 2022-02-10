import { useMemo, useRef } from 'react';
import {
  getPixelSizeOfBoardItem,
  getRandomCount,
  getRgbArrayOfAnwer,
  getRgbArrayOfWrongAnswer,
  array2Rgb,
  px2rem,
} from '@/utils';
import { GameInfoProps } from '@/App/appReducer.types';

export interface BoardData {
  sizeOfItem: string;
  indexOfAnswer: number;
  rgbOfAnswer: string;
  rgbOfWrongAnswer: string;
}

export const useBoardData = (gameInfos: GameInfoProps): BoardData => {
  const boardData = useRef<BoardData>();

  const { isStageGoingOn, numberOfItems, stage } = gameInfos;

  return useMemo(() => {
    if (!isStageGoingOn && boardData.current) return boardData.current;

    const sizeOfItem = px2rem(getPixelSizeOfBoardItem(numberOfItems));
    const indexOfAnswer = getRandomCount(numberOfItems);
    const rgbArrayOfAnswer = getRgbArrayOfAnwer();
    const rgbArrayOfWrongAnswer = getRgbArrayOfWrongAnswer(rgbArrayOfAnswer, stage);

    boardData.current = {
      sizeOfItem,
      indexOfAnswer,
      rgbOfAnswer: array2Rgb(rgbArrayOfAnswer),
      rgbOfWrongAnswer: array2Rgb(rgbArrayOfWrongAnswer),
    };

    return boardData.current;
  }, [numberOfItems, stage, isStageGoingOn]);
};
