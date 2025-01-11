import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import CircleProgressChart from "../charts/CircleProgressChart";

const SampleGoalCard = () => {
  return (
    <Card className="dark:bg-transparent hidden xl:block">
      <CardHeader>
        <div className="w-full flex justify-between items-center">
          <span className="text-2xl font-bold">목표 추적기</span>
          <div className="px-4 py-2 rounded-full btn-bg text-white font-bold">
            목표
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex h-[250px]">
        <CircleProgressChart goal={10000} value={5000} text="Daily" />
        <CircleProgressChart goal={50000} value={37500} text="Weekly" />
        <CircleProgressChart goal={400000} value={387300} text="Monthly" />
      </CardContent>
    </Card>
  );
};

export default SampleGoalCard;
