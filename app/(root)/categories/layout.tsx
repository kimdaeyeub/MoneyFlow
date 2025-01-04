import CategoryDetailSkeleton from "@/components/skeleton/CategoryDetailSkeleton";
import React, { Suspense } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<CategoryDetailSkeleton />}>{children}</Suspense>;
};

export default layout;
