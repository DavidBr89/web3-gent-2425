import { createContext, useContext, useState } from "react";

// STAP 1: Aanmaken van een nieuwe context
export const DarkModeContext = createContext();

// STAP 2: Provider component aanmaken
const DarkModeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

// Custom hook aangemaakt
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
