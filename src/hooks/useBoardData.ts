import { useMemo } from 'react';
import {
  getPixelSizeOfBoardItem,
  getRandomCount,
  getRgbArrayOfAnwer,
  getRgbArrayOfWrongAnswer,
  array2Rgb,
  px2rem,
} from '@/utils';

export interface BoardData {
  sizeOfItem: string;
  indexOfAnswer: number;
  rgbOfAnswer: string;
  rgbOfWrongAnswer: string;
}

export const useBoardData = (numberOfItems: number, stage: number): BoardData => {
  return useMemo(() => {
    const sizeOfItem = px2rem(getPixelSizeOfBoardItem(numberOfItems));
    const indexOfAnswer = getRandomCount(numberOfItems);
    const rgbArrayOfAnswer = getRgbArrayOfAnwer();
    const rgbArrayOfWrongAnswer = getRgbArrayOfWrongAnswer(rgbArrayOfAnswer, stage);

    return {
      sizeOfItem,
      indexOfAnswer,
      rgbOfAnswer: array2Rgb(rgbArrayOfAnswer),
      rgbOfWrongAnswer: array2Rgb(rgbArrayOfWrongAnswer),
    };
  }, [stage, numberOfItems]);
};
