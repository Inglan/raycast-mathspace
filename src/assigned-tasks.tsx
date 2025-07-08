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
    <List>
      {tasks?.tasks.map((item) => (
        <List.Item
          key={item.taskId}
          icon={item.percent === 100 ? Icon.Checkmark : item.percent === 0 ? Icon.Circle : Icon.CircleProgress50}
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
