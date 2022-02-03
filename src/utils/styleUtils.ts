export const px2rem = (pxValue: number, base = 16): string => {
  return `${pxValue / base}rem`;
};

export const array2Rgb = (answer: number[]): string => {
  const [red, green, blue] = answer;

  return `rgb(${red}, ${green}, ${blue})`;
};
