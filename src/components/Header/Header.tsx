
// import react
import { FC, useContext, useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// import context
import { SidebarContext, CartContext } from '../../context'

//import type
import { CartItemType, SidebarContextType } from '../../types'
import { AuthContext } from '../../auth/context/authContext'

// function
export const Header: FC = () => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen,setIsOpen} = useContext(SidebarContext) as SidebarContextType
  const {itemAmount} = useContext(CartContext) as CartItemType
  const {isLogged, logout} = useContext(AuthContext)
  const userWelcome = JSON.parse(localStorage.getItem('user') || '[]')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all px-4`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {isLogged ? (
          <div>
            <p>{`Welcome ${userWelcome.user}`}</p> 
            <button onClick={logout}>Logout</button>
          </div>
        )
        :
        (
          <Link to={'/login'}>
              <button>Login</button>
          </Link>
          
        ) 
          
        }
        
        <div>
          
        </div>
        <div>
          <Link to={'/'}>LOGO</Link>
        </div>
        {/* car */}
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative' >
          <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center'>{itemAmount}</div>
        
      </div>
      </div>
    </header>
  )
} 