import { Match } from "@/lib/types";
import { Dashboard } from "./Dashboard";

export default async function DashboardWrapper() {
  const res = await fetch(
    "https://bx-api-dev.betalux.io/sport-data/lastEvents",
    {
     /*  next: {
        revalidate: 5,
      }, */
      cache: "no-store",
    }
  );
  const data: Match[] = await res.json();
  return <Dashboard data={data} />;
}
