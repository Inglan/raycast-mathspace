import { useEffect, useState } from "react";
import { Icon, MenuBarExtra, open } from "@raycast/api";
import { getLeaderboard } from "./mathspaceapi";

type Leaderboard = {
  points: number;
  rank: number;
  name: string;
  avatarUrl: string;
  studentId: string;
  rankDelta: number;
};

const useMathspace = () => {
  const [state, setState] = useState<{ place: number; xp: number; leaderboard: Leaderboard[]; isLoading: boolean }>({
    place: 0,
    xp: 0,
    leaderboard: [],
    isLoading: true,
  });
  useEffect(() => {
    (async () => {
      const leaderboard = await getLeaderboard();
      setState({
        place: leaderboard.place,
        xp: leaderboard.xp,
        leaderboard: leaderboard.leaderboard,
        isLoading: false,
      });
    })();
  }, []);
  return state;
};

export default function Command() {
  const { place, xp, leaderboard, isLoading } = useMathspace();

  return (
    <MenuBarExtra icon={Icon.Calculator} isLoading={isLoading} title={"#" + place}>
      <MenuBarExtra.Item
        title={xp + " XP"}
        onAction={() => {
          open("https://mathspace.co/student");
        }}
      ></MenuBarExtra.Item>
      {leaderboard.map((leaderboardItem) => (
        <MenuBarExtra.Item
          key={leaderboardItem.studentId}
          icon={leaderboardItem.avatarUrl}
          title={leaderboardItem.rank + ". " + leaderboardItem.name}
          subtitle={String(leaderboardItem.points)}
          onAction={() => {}}
        />
      ))}
    </MenuBarExtra>
  );
}
