import {createContext,useContext} from 'react'

export const ThemeContext=createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=> {},
})

export const ThemeProvider=ThemeContext.Provider

//custom Hook for sending useContext and ThemeContext together
export default function useTheme(){
    return useContext(ThemeContext)
}