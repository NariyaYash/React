import { createContext, useContext } from "react";

export const ThemContext = createContext({
    themeMode: "dark",
    SwitchToDark: () => { },
    SwitchToLight: () => { },
});


export const ThemProvider = ThemContext.Provider


export default function useTheme() {
    return useContext(ThemContext)
}

