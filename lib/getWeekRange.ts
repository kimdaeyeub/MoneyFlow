/**
 작성자: 김대엽
파일의 역할: 현재 날짜를 기준으로 해당 주의 시작일(월요일)과 종료일(일요일)을 반환합니다.
생성 일자: 2024-12-22
 */

export const getWeekRange = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (일요일)부터 6 (토요일)까지의 값을 반환
  const startOfWeek = new Date(today);
  const endOfWeek = new Date(today);

  // 월요일을 주의 시작으로 설정
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  startOfWeek.setDate(today.getDate() + diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  // 일요일을 주의 끝으로 설정
  const diffToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  endOfWeek.setDate(today.getDate() + diffToSunday);
  endOfWeek.setHours(23, 59, 59, 999);

  return { startOfWeek, endOfWeek };
};
