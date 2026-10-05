import { createContext, useContext } from "react";

export type Actions = {
  openBook: () => void;
  openScorecard: () => void;
  openCase: (slug: string) => void;
};

export const ActionsContext = createContext<Actions>({
  openBook: () => {},
  openScorecard: () => {},
  openCase: () => {},
});

export const useActions = () => useContext(ActionsContext);
