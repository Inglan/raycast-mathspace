import { ActionPanel, Action, Icon, List, Image } from "@raycast/api";
import { getLeaderboard } from "./mathspaceapi";
import { useEffect, useState } from "react";

const ITEMS = Array.from(Array(3).keys()).map((key) => {
  return {
    id: key,
    icon: Icon.Bird,
    title: "Title " + key,
    subtitle: "Subtitle",
    accessory: "Accessory",
  };
});

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
    <List>
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
