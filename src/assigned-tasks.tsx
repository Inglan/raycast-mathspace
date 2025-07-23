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
      {tasks?.tasks.map((task) => (
        <List.Item
          key={task.taskId}
          icon={
            task.percent === 0
              ? Icon.Circle
              : task.percent < 25
                ? Icon.CircleProgress25
                : task.percent < 50
                  ? Icon.CircleProgress50
                  : task.percent < 75
                    ? Icon.CircleProgress75
                    : Icon.CircleProgress100
          }
          title={task.name}
          subtitle={task.percent + "%"}
          accessories={[{ text: task.problemsDone + "/" + task.problems }]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={task.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
