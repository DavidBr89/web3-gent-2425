import { createContext, useState } from "react";

// STAP 1: Aanmaken van een nieuwe context
const DarkModeContext = createContext();

// STAP 2: Provider component aanmaken
const DarkModeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode: isDarkMode,
      }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
