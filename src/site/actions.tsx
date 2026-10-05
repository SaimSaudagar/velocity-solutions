import { createContext, useContext } from "react";

export type Actions = {
  openBook: () => void;
  openScorecard: () => void;
};

export const ActionsContext = createContext<Actions>({
  openBook: () => {},
  openScorecard: () => {},
});

export const useActions = () => useContext(ActionsContext);
