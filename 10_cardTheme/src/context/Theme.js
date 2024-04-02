import react, { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode:"light",
    darkMode:()=>{},
    ligthMode:()=>{}
})

export const ContextProvider = ThemeContext.Provider;

export  function useTheme() {
    return useContext(ThemeContext);
}
