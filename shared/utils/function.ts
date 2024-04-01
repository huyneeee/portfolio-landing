export const convertTextToNumber = (fontSize: string): number => {
  return +fontSize.replace("px", "");
};
