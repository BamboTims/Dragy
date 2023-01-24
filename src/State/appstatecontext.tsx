import React, {
  createContext,
  useContext,
  FC,
  Dispatch,
} from "react";
import { AppState, appStateReducer, List, Task } from "./appStateReducer";
import { Action } from "./action";
import { useImmerReducer } from "use-immer";

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  children?: React.ReactNode;
  dispatch: Dispatch<Action>;
};

type AppStateProviderProps = {
  children?: React.ReactNode;
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
