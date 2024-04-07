export const convertTextToNumber = (fontSize: string, unit = "em"): number => {
  return +fontSize.replace(unit, "");
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
