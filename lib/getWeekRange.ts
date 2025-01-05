/**
 작성자: 김대엽
파일의 역할: 현재 날짜를 기준으로 해당 주의 시작일(월요일)과 종료일(일요일)을 반환합니다.
생성 일자: 2024-12-22
 */

import { toKoreaTime } from "./formatKoreaDate";

export const getWeekRange = () => {
  const today = toKoreaTime(new Date());
  const dayOfWeek = today.getDay();
  const startOfWeek = new Date(today);

  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  startOfWeek.setDate(today.getDate() + diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(today);
  endOfWeek.setHours(23, 59, 59, 999);

  const startOfWeekUTC = new Date(startOfWeek.getTime() - 9 * 60 * 60 * 1000);
  const endOfWeekUTC = new Date(endOfWeek.getTime() - 9 * 60 * 60 * 1000);

  return { startOfWeek: startOfWeekUTC, endOfWeek: endOfWeekUTC };
};
