import { Match } from "@/lib/types";

export default async function Home() {
  const res = await fetch(
    "https://bx-api-dev.betalux.io/sport-data/lastEvents",
    {
      cache: "no-store",
    }
  );
  const data: Match[] = await res.json();
  console.log(data);
  return (
    <div>
      {data.map((x) => (
        <div key={x.id}>{x.id}</div>
      ))}
    </div>
  );
}
