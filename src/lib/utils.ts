import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEventType(eventType: EventType | undefined): string {
  switch (eventType) {
    case "match_ended":
      return "Match Ended";
    case "score_change":
      return "Score Change";
    case "match_started":
      return "Match Started";
    case "injury":
      return "Injury";
    case "video_assistant_referee":
      return "Video Assistant Referee";
    case "video_assistant_referee_over":
      return "VAR Review Over";
    case "red_card":
      return "Red Card";
    default:
      return "Unknown Event";
  }
}
