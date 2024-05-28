import DashboardWrapper from "@/components/DashboardComponents/DashboardWrapper";
import SkeletonDashboard from "@/components/DashboardComponents/SkeletonDashboard";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense fallback={<SkeletonDashboard />}>
      <DashboardWrapper />
    </Suspense>
  );
}
