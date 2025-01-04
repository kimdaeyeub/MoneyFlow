export const toKoreaTime = (date: Date): Date => {
  const koreaOffset = 9 * 60;
  const localOffset = date.getTimezoneOffset();

  const koreaTime = new Date(
    date.getTime() + (koreaOffset - localOffset) * 60 * 1000
  );
  return koreaTime;
};
