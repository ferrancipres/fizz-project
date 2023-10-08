// import 
// import React from 'react'
import { useContext } from "react"
import { SidebarContext } from "../context/SidebarContext"
import { SidebarContextType } from "../types/SidebarContextType"
// import icons
import {BsBag} from 'react-icons/bs'

// type
// type Props = {}

// function
export const Header = () => {
  // pendiente de revisar Typescript
  const {isOpen,setIsOpen} = useContext(SidebarContext) as SidebarContextType
  return (
    <header className='bg-pink-200'>
      <div>Header</div>
      <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl' />
      </div>
    </header>
  )
} 