/**
 작성자: 김대엽
파일의 역할: 현재 날짜를 기준으로 해당 주의 시작일(월요일)과 종료일(일요일)을 반환합니다.
생성 일자: 2024-12-22
 */

import { toKoreaTime } from "./formatKoreaDate";

export const getWeekRange = () => {
  const today = toKoreaTime(new Date());
  const dayOfWeek = today.getDay();
  const startOfWeek = new Date(
    Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (dayOfWeek === 0 ? -6 : 1 - dayOfWeek),
      0,
      0,
      0,
      0
    )
  );
  const endOfWeek = new Date(
    Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (dayOfWeek === 0 ? 0 : 7 - dayOfWeek),
      23,
      59,
      59,
      999
    )
  );

  return { startOfWeek, endOfWeek };
};
