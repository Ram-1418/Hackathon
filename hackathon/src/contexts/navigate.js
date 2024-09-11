import  { createContext, useContext } from "react";
export const NavigateContext = createContext({
    navigate:()=>{},
});

export const NavigateProvider = NavigateContext.Provider

export default function navigate(){
    return useContext(NavigateContext)
}