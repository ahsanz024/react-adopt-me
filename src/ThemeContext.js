import { createContext } from "react";

// createContext needs a hook (with defaultValue, and the state updater)
// Currenlty only has an empty function
const ThemeContext = createContext("green", () => {});

export default ThemeContext;
