import {
  MAX_WIDTH_PIXEL,
  MARGIN_PIXEL,
  MIN_RGB_DIFF,
  MAX_RGB_DIFF,
  MAX_RGB_VALUE,
  MIN_RGB_VALUE,
} from '@/App/appConstants';

export const getNumberOfBoardItem = (stage: number): number => {
  return (Math.round((stage + 0.5) / 2) + 1) ** 2;
};

export const getPixelSizeOfBoardItem = (numberOfItems: number): number => {
  const numberOfItemsInTheRow = Math.sqrt(numberOfItems);

  return MAX_WIDTH_PIXEL / numberOfItemsInTheRow - 2 * MARGIN_PIXEL;
};

export const getRandomCount = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const getRgbArrayOfAnwer = (): number[] => {
  return Array.from({ length: 3 }, () => getRandomCount(MAX_RGB_VALUE + 1));
};

export const getRgbArrayOfWrongAnswer = (arrayOfAnswer: number[], stage: number): number[] => {
  const differenceOfRGB = Math.max(MIN_RGB_DIFF, MAX_RGB_DIFF - Math.floor((stage + 1) / 3));

  return arrayOfAnswer.map((rgb) =>
    getRandomCount(2)
      ? Math.min(MAX_RGB_VALUE, rgb + differenceOfRGB)
      : Math.max(MIN_RGB_VALUE, rgb - differenceOfRGB)
  );
};
