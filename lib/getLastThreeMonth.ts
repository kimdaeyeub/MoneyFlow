/*
작성자: 김대엽
파일의 역할: 오늘을 기준으로 최근 3달의 데이터를 가져오기 위해 오늘의 날짜와 오늘의 날짜로부터 3달 전의 날짜를 구하는 함수
생성 일자: 2024-12-23
 */

import { toKoreaTime } from "./formatKoreaDate";

export const getLastThreeMonth = () => {
  const today = toKoreaTime(new Date());
  const threeMonthAgo = new Date(today);
  threeMonthAgo.setMonth(today.getMonth() - 3);

  today.setHours(23, 59, 59, 999);
  threeMonthAgo.setHours(0, 0, 0, 0);

  const startOfRangeUTC = new Date(
    threeMonthAgo.getTime() - 9 * 60 * 60 * 1000
  );
  const endOfRangeUTC = new Date(today.getTime() - 9 * 60 * 60 * 1000);

  return { today: endOfRangeUTC, threeMonthAgo: startOfRangeUTC };
};
