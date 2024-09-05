import React,{createContext} from "react";
export const ScreenWidthContext = createContext({});
const ScreenWidthProvider = ScreenWidthContext.Provider;
export default function useScreenWidth(){
    return useContext(ScreenWidthContext);
}
