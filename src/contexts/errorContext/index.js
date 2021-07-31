import { createContext, useContext, useState } from "react";

const ErrorContext = createContext({});

export function ErrorProvider({ children }) {
  const [errorState, errorSetter] = useState(false);

  function errorDispatch(status) {
    switch (status) {
      case "ERROR":
        errorSetter(true);
        break;
      case "RESOLVE":
        errorSetter(false);
        break;
    }
  }

  return (
    <ErrorContext.Provider value={{ errorState, errorDispatch }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}
