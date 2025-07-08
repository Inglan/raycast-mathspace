import { Detail } from "@raycast/api";
import { useState } from "react";
import { getBasicInformation, getLeaderboard } from "./mathspaceapi";

export default function Command() {
  const [basicData, setBasicData] = useState<{
    name: { first: string; last: string };
    email: string;
    learningFocus: { id: string; name: string };
  } | null>();

  const [leaderboard, setLeaderboard] = useState<{
    leaderboard: Array<{
      points: number;
      rank: number;
      name: string;
      avatarUrl: string;
      studentId: string;
      rankDelta: number;
    }>;
    xp: number;
    place: number;
  } | null>();

  getLeaderboard().then(setLeaderboard);
  getBasicInformation().then(setBasicData);

  return (
    <Detail
      isLoading={basicData === undefined || leaderboard === undefined}
      markdown={`# ${basicData?.name.first || ""} ${basicData?.name.last || ""}
## Email: ${basicData?.email || ""}

## XP: ${leaderboard?.xp || ""}

## Place on leaderboard: ${leaderboard?.place || ""}
    `}
    />
  );
}
