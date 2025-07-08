import { List, Image } from "@raycast/api";
import { getLeaderboard } from "./mathspaceapi";
import { useEffect, useState } from "react";

export default function Command() {
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

  useEffect(() => {
    getLeaderboard().then(setLeaderboard);
  }, []);

  return (
    <List isLoading={leaderboard == null}>
      {leaderboard?.leaderboard.map((item) => (
        <List.Item
          key={item.studentId}
          icon={{ source: item.avatarUrl, mask: Image.Mask.Circle }}
          title={item.name}
          subtitle={String(item.points)}
          accessories={[{ text: String(item.rank) }]}
        />
      ))}
    </List>
  );
}
