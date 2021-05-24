import { createContext, useContext, useReducer } from "react";
import { themeReducer } from "./themeReducer.js";
import { day } from "./data.js";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, themeSetter] = useReducer(themeReducer, day);
  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
