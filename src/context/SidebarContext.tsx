import { FC, createContext, useState} from 'react'

import { SidebarProviderProps } from '../types';


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