import React, { useContext, useState } from "react";

const stateContext = React.createContext<{
  state: any;
  setState: (state: any) => void;
}>({
  state: {},
  setState: () => {},
});

const usePlayerState = () => useContext(stateContext);

const initialState = { firstLoadModulesList: true };

const { Provider } = stateContext;

const PlayerStateProvider: any = ({ children }: any) => {
  const [state, setStateState] = useState<any>(initialState);

  const setState = (stateToUpdate: any) => {
    setStateState({ ...state, ...stateToUpdate });
  };
  return <Provider value={{ state, setState }}>{children}</Provider>;
};

export { PlayerStateProvider, usePlayerState };
