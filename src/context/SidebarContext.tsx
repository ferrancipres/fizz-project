// import 
// import FC, context, useState
import { FC, createContext, useState} from "react"

// import type
import { SideProviderProps } from "../types/SideProviderProps";

// function
export const SidebarContext = createContext({});
export const SidebarProvider:FC<SideProviderProps> = ({children}) => {
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