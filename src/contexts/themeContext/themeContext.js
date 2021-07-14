import { createContext, useContext, useEffect, useReducer } from "react";
import { themeReducer } from "./themeReducer.js";
import { day } from "./data.js";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, themeDispatch] = useReducer(themeReducer, day);

  useEffect(() => {
    let {payload} = JSON.parse(localStorage.getItem("activetheme"))||{};
    payload && themeDispatch({payload});
    debugger;
  },[]);

  return (
    <ThemeContext.Provider value={{ theme, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
