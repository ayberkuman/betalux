import { Dashboard } from "@/components/DashboardComponents/Dashboard";
import SkeletonDashboard from "@/components/DashboardComponents/SkeletonDashboard";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense fallback={<SkeletonDashboard />}>
      <Dashboard />
    </Suspense>
  );
}
