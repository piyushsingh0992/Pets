import { createContext, useContext, useState, useReducer } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toastState, toastDispatch] = useReducer(toastManager, {
    trigger: false,
  });

  function toastManager(state, action) {
    debugger;
    const { type, message } = action;
    switch (type) {
      case "RESET":
        return { trigger: false };

      default:
        return { trigger: true, type, message };
    }
  }

  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
