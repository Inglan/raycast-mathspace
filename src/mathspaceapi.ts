import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  cookie: string;
  csrftoken: string;
}

export async function dashbaordQuery() {
  const { cookie, csrftoken } = getPreferenceValues<Preferences>();
  return { cookie, csrftoken };
}
