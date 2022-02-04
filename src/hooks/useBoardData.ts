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
  itemSize: string;
  indexOfanswer: number;
  rgbOfAnswer: string;
  rgbOfWrongAnswer: string;
}

export const useBoardData = (numberOfItems: number, stage: number): BoardData => {
  return useMemo(() => {
    const itemSize = px2rem(getPixelSizeOfBoardItem(numberOfItems));
    const indexOfanswer = getRandomCount(numberOfItems);
    const rgbArrayOfAnswer = getRgbArrayOfAnwer();
    const rgbOfWrongAnswer = array2Rgb(getRgbArrayOfWrongAnswer(rgbArrayOfAnswer, stage));

    return { itemSize, indexOfanswer, rgbOfAnswer: array2Rgb(rgbArrayOfAnswer), rgbOfWrongAnswer };
  }, [stage, numberOfItems]);
};
