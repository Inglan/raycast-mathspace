import { ActionPanel, Action, Icon, List } from "@raycast/api";
import { getAssignedTasks } from "./mathspaceapi";
import { useEffect, useState } from "react";

export default function Command() {
  const [tasks, setTasks] = useState<{
    tasks: {
      name: string;
      taskId: string;
      workoutId: string;
      url: string;
      problems: number;
      problemsDone: number;
      percent: number;
    }[];
  } | null>();
  useEffect(() => {
    getAssignedTasks().then(setTasks);
  }, []);
  return (
    <List isLoading={tasks == null}>
      {tasks?.tasks.map((item) => (
        <List.Item
          key={item.taskId}
          icon={
            item.percent === 0
              ? Icon.Circle
              : item.percent < 25
                ? Icon.CircleProgress25
                : item.percent < 50
                  ? Icon.CircleProgress50
                  : item.percent < 75
                    ? Icon.CircleProgress75
                    : Icon.CircleProgress100
          }
          title={item.name}
          subtitle={item.percent + "%"}
          accessories={[{ text: item.problemsDone + "/" + item.problems }]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
