// import 
// import FC, context, useState
import { FC, createContext, useState} from 'react'

// import type
import { SidebarProviderProps } from '../types';

// function
export const SidebarContext = createContext({});
export const SidebarProvider:FC<SidebarProviderProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // estado del modal 
  const handleClose = () => {
    setIsOpen (false) 
  }

  return (
    <SidebarContext.Provider value={{isOpen,setIsOpen, handleClose}}>
      {children}
    </SidebarContext.Provider>
  )
}