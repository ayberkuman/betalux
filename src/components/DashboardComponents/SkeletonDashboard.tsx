import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonDashboard() {
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3">
          <Skeleton className="w-full h-44" />
          <Skeleton className="h-44" />
          <Skeleton className="h-44" />
        </div>
        <Skeleton className="h-[600px]" />
      </div>
      <div>
        <Skeleton className="h-[800px]" />
      </div>
    </>
  );
}
