export interface Match {
  id: number;
  homeCompetitorID: number;
  awayCompetitorID: number;
  competitors: CompetitorElement[];
  startTime: Date;
  sportEventStatus: SportEventStatus;
  event: Event;
}

export interface CompetitorElement {
  id: number;
  name: string;
  countryCode: string;
  shortName: string;
  abbreviation: string;
}

export interface Event {
  id: number;
  type: PurpleType;
  time: Date;
  matchClock?: string;
  matchTime?: number;
  competitor?: CompetitorEnum;
  x?: number;
  y?: number;
  period?: number;
  periodType?: PeriodTypeEnum;
  updated?: boolean;
  updatedTime?: Date;
  homeScore?: number;
  awayScore?: number;
  method?: string;
  stoppageTime?: number;
  stoppageTimeClock?: string;
  description?: string;
  players?: Player[];
  cardDescription?: string;
}

export type CompetitorEnum = "home" | "away";

export type PeriodTypeEnum = "regular_period" | "overtime";

export interface Player {
  id: string;
  name: string;
  type?: PlayerType;
}

export type PlayerType = "scorer" | "assist";

export type PurpleType =
  | "match_ended"
  | "score_change"
  | "match_started"
  | "injury"
  | "video_assistant_referee"
  | "video_assistant_referee_over"
  | "red_card";

export interface SportEventStatus {
  id: number;
  status: Status;
  matchStatus: MatchStatus;
  homeScore: number | null;
  awayScore: number | null;
  winnerID: number | null;
  periodScores: PeriodScore[] | null;
  clock: Clock | null;
  lastUpdated: Date;
}

export interface Clock {
  played: string;
  stoppageTimePlayed?: string;
  stoppageTimeAnnounced?: string;
}

export type MatchStatus =
  | "ended"
  | "2nd_half"
  | "not_started"
  | "aet"
  | "1st_half";

export interface PeriodScore {
  type: PeriodTypeEnum;
  number?: number;
  awayScore: number;
  homeScore: number;
}

export type Status = "ended" | "live" | "not_started" | "closed";
