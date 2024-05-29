import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Event, Match } from "@/lib/types";
import { getEventType } from "@/lib/utils";
import { Separator } from "../ui/separator";

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
        <div className="p-3 flex items-center justify-between">
          <CardTitle className="text-xl basis-1/2 text-center">
            {latestEvent?.competitors[0].name}
          </CardTitle>
          {"-"}
          <CardTitle className="text-xl basis-1/2 text-center">
            {latestEvent?.competitors[1].name}
          </CardTitle>
        </div>
        <CardContent className="text-center">
          <div className="text-xs text-muted-foreground">
            {getEventType(latestEvent?.event.type)}
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={25} aria-label="25% increase" />
        </CardFooter>
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
