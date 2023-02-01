import { AppState } from "../State/appStateReducer";

export const save = async (payload: AppState) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/save`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error while saving the state");
  }
};

export const load = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_ENDPOINT}/load`
  );
  if (response.ok) {
    return response.json() as Promise<AppState>;
  } else {
    throw new Error("Error while loading the state");
  }
};
