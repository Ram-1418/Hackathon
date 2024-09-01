import React, { createContext } from "react";
export const NavigateContext = createContext({});

export const NavigateProvider = ThemeContext.Provider

export default function useNavigate(){
    return useContext(NavigateContext)
}