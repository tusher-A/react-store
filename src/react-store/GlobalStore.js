import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const GlobalStore = props => {
  if (props === undefined)
    throw new Error(
      "Props Undefined. You probably mixed up betweenn default/named import"
    );
  const { load, ...rest } = props;
  const [state, dispatch] = useReducer(load.reducer, load.initialState);

  return <AppContext.Provider value={{ state, dispatch }} {...rest} />;
};

export const useStore = () => useContext(AppContext);

export default GlobalStore;
