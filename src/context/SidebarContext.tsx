// import 
// import FC, context, useState
import { FC, createContext, useState} from "react"

// import type
import { SidebarProviderProps } from "../types/SidebarProviderProps";

// function
export const SidebarContext = createContext({});
export const SidebarProvider:FC<SidebarProviderProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen (false) 
  }

  return (
    <SidebarContext.Provider value={{isOpen,setIsOpen, handleClose}}>
      {children}
    </SidebarContext.Provider>
  )
}