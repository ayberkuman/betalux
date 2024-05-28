export interface Match {
  id: number;
  homeCompetitorId: number;
  awayCompetitorId: number;
  competitors: CompetitorElement[];
  start_time: Date;
  sport_event_status: SportEventStatus;
  event: Event;
}

export interface CompetitorElement {
  id: number;
  name: string;
  country_code: string;
  short_name: string;
  abbreviation: string;
}

export interface Event {
  id: number;
  type: EventType;
  time: Date;
  match_clock?: string;
  match_time?: number;
  competitor?: CompetitorEnum;
  x?: number;
  y?: number;
  period?: number;
  period_type?: PeriodTypeEnum;
  updated?: boolean;
  updated_time?: Date;
  home_score?: number;
  away_score?: number;
  method?: string;
  stoppage_time?: number;
  stoppage_time_clock?: string;
  description?: string;
  players?: Player[];
  card_description?: string;
}

export type CompetitorEnum = "home" | "away";

export type PeriodTypeEnum = "regular_period" | "overtime";

export interface Player {
  id: string;
  name: string;
  type?: PlayerType;
}

export type PlayerType = "scorer" | "assist";

export type EventType =
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
  match_status: MatchStatus;
  home_score: number | null;
  away_score: number | null;
  winner_id: number | null;
  period_scores: PeriodScore[] | null;
  clock: Clock | null;
  lastUpdated: Date;
}

export interface Clock {
  played: string;
  stoppage_time_played?: string;
  stoppage_time_announced?: string;
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
  away_score: number;
  home_score: number;
}

export type Status = "ended" | "live" | "not_started" | "closed";
