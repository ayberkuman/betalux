import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Event, EventType, Match } from "@/lib/types";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function CardSide({ matchEvents }: { matchEvents: Match[] }) {
  console.log(matchEvents);
  return (
    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader>
        <div className="grid grid-cols-2 place-items-center gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            {matchEvents[0].competitors[0].name}
          </CardTitle>
          <CardTitle className="group flex items-center gap-2 text-lg text-right">
            {matchEvents[0].competitors[1].name}
          </CardTitle>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            {matchEvents[matchEvents.length - 1].sport_event_status.home_score}
          </CardTitle>
          <CardTitle className="group flex items-center gap-2 text-lg text-right">
            {matchEvents[matchEvents.length - 1].sport_event_status.away_score}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4 text-sm">
        {matchEvents.map((event) => (
          <>
            <EventComponent key={event.id} event={event.event} />
            <Separator />
          </>
        ))}
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
      </CardFooter>
    </Card>
  );
}

const EventComponent = ({ event }: { event: Event }) => {
  return (
    <ul className="grid gap-3">
      <li className="flex items-center justify-around">
        <div className="text-muted-foreground basis-1/3">
          <span> {event.players ? event.players[0].name : "-"}</span>
        </div>
        <div className="basis-1/3">{getIconForType(event.type)}</div>
        <div className="basis-1/3">{event.match_clock}</div>
      </li>
    </ul>
  );
};

export function getIconForType(eventType: EventType | undefined): ReactNode {
  switch (eventType) {
    case "match_ended":
      return (
        <Image
          src="/football-referee.png"
          height={20}
          width={20}
          alt="referee"
        />
      );
    case "score_change":
      return <Image src="/goal.png" height={20} width={20} alt="football" />;
    case "match_started":
      return (
        <Image
          src="/football-referee.png"
          height={20}
          width={20}
          alt="referee"
        />
      );
    case "injury":
      return (
        <Image
          src="/injury.png"
          height={20}
          width={20}
          alt="injured illustration"
        />
      );
    case "video_assistant_referee":
      return (
        <Image src="/var-replay.png" height={20} width={20} alt="var screen" />
      );
    case "video_assistant_referee_over":
      return (
        <Image src="/var-replay.png" height={20} width={20} alt="var screen" />
      );
    case "red_card":
      return <Image src="/red.png" height={20} width={20} alt="red card" />;
    default:
      return "Unknown Event";
  }
}
