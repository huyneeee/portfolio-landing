export const convertTextToNumber = (fontSize: string, unit = "em"): number => {
  return +fontSize.replace(unit, "");
};
