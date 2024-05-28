import { Match } from "@/lib/types";
import CardSide from "./CardSide";
import Cards from "./Cards";
import TableData from "./TableData";

export async function Dashboard() {
  const res = await fetch(
    "https://bx-api-dev.betalux.io/sport-data/lastEvents",
    {
      cache: "no-store",
    }
  );
  const data: Match[] = await res.json();
  return (
    <>
      <div className="grid auto-rows-max max-h-screen overflow-y-scroll items-start gap-4 md:gap-8 lg:col-span-2">
        <Cards />
        <TableData data={data} />
      </div>
      <div>
        <CardSide />
      </div>
    </>
  );
}
