import { createContext, useContext, useState } from "react";

const ErrorContext = createContext({});

export function ErrorProvider({ children }) {
  const [errorState, errorDispatch] = useState(false);

  return (
    <ErrorContext.Provider value={{ errorState, errorDispatch }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}
