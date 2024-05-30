import { Match } from "@/lib/types";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function Cards({ matchEvents }: { matchEvents: Match[] }) {
  function getLatestEvent(events: Match | Match[]): Match {
    if (Array.isArray(events)) {
      return events[events.length - 1];
    }
    return events;
  }

  const latestEvent =
    matchEvents.length > 0 ? getLatestEvent(matchEvents) : null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-4xl">
            {latestEvent?.sport_event_status.home_score ?? 0}
          </CardTitle>
        </CardHeader>
        {/*  <CardContent>
          <div className="text-xs text-muted-foreground">
            +10% from last month
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={12} aria-label="12% increase" />
        </CardFooter> */}
      </Card>
      <Card className="sm:col-span-2">
        <div className="p-3 flex h-full items-center justify-between">
          <CardTitle className="text-xl basis-1/2 text-center">
            {latestEvent?.competitors[0].abbreviation}
          </CardTitle>
          {"-"}
          <CardTitle className="text-xl basis-1/2 text-center">
            {latestEvent?.competitors[1].abbreviation}
          </CardTitle>
        </div>
      </Card>
      <Card>
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-4xl">
            {latestEvent?.sport_event_status.away_score ?? 0}
          </CardTitle>
        </CardHeader>
        {/*  <CardContent>
          <div className="text-xs text-muted-foreground">
            +10% from last month
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={12} aria-label="12% increase" />
        </CardFooter> */}
      </Card>
    </div>
  );
}
