"use client";
import { Match } from "@/lib/types";
import { useState } from "react";
import CardSide from "./CardSide";
import Cards from "./Cards";
import TableData from "./TableData";

export async function Dashboard({ data }: { data: Match[] }) {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(
    data[data.length - 1].id
  );

  const matchEvents =
    selectedMatch !== null
      ? data.filter((match) => match.id === selectedMatch)
      : [];

  return (
    <>
      <div className="grid auto-rows-max max-h-screen overflow-y-scroll items-start gap-4 md:gap-8 lg:col-span-2">
        <Cards matchEvents={matchEvents} />
        <TableData
          data={data}
          selectedMatch={selectedMatch}
          setSelectedMatch={setSelectedMatch}
        />
      </div>
      <div>
        <CardSide matchEvents={matchEvents} />
      </div>
    </>
  );
}
