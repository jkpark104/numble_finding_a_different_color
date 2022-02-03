export const getNumberOfBoardItem = (stage: number): number => {
  return Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
};

export const getPixelSizeOfBoardItem = (boardItemNumber: number): number => {
  return (360 - 4 * Math.sqrt(boardItemNumber)) / Math.sqrt(boardItemNumber);
};

export const getRandomCount = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const getRgbArrayOfAnwer = (): number[] => {
  return Array.from({ length: 3 }, () => getRandomCount(256));
};

export const getRgbArrayOfWrongAnswer = (arrayOfAnswer: number[], stage: number): number[] => {
  const diff = 25 - Math.floor((stage + 1) / 3);

  return arrayOfAnswer.map((rgb) =>
    getRandomCount(2) ? Math.min(255, rgb + diff) : Math.max(0, rgb - diff)
  );
};
