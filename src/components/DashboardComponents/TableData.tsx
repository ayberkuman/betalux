"use client";
import { Match } from "@/lib/types";
import { format, parseISO, compareDesc } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Dispatch, SetStateAction } from "react";

export default function TableData({
  data,
  selectedMatch,
  setSelectedMatch,
}: {
  data: Match[];
  selectedMatch: number | null;
  setSelectedMatch: Dispatch<SetStateAction<number | null>>;
}) {
  const uniqueMatches = new Set<number>();

  const sortedUniqueData = data
    .filter((match) => {
      if (uniqueMatches.has(match.id)) {
        return false;
      }
      uniqueMatches.add(match.id);
      return true;
    })
    .sort((a, b) =>
      compareDesc(
        parseISO(a.event.time.toString()),
        parseISO(b.event.time.toString())
      )
    );

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Live Matches</CardTitle>
        <span className="text-xs">Click to a match to see latest events.</span>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div>Match Start</div>
                <div className="text-xs">Match ID</div>
              </TableHead>
              <TableHead className="hidden sm:table-cell">Home</TableHead>
              <TableHead className="hidden md:table-cell">Score</TableHead>
              <TableHead className="hidden sm:table-cell">Away</TableHead>
              <TableHead className="hidden sm:table-cell">Event ID</TableHead>
              <TableHead className="">Event Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUniqueData.map((match) => (
              <TableRow
                key={match.id}
                onClick={() => setSelectedMatch(match.id)}
                className="cursor-pointer"
              >
                <TableCell>
                  <div className="font-medium">
                    {format(parseISO(match.start_time.toString()), "HH:mm")}
                  </div>
                  <div className="hidden text-xs text-muted-foreground md:inline">
                    {match.id}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {match.competitors[0].name}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {match.sport_event_status.home_score}-
                  {match.sport_event_status.away_score}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {match.competitors[1].name}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {match.event.id}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {match.event.match_time}&quot;
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
