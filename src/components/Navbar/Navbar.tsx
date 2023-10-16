
// import react
import { useContext, useEffect, useState } from 'react'

import { BsBag } from 'react-icons/bs'
import { FaUserLock, FaUserCheck } from 'react-icons/fa'

import newFizz from '../../assets/img/newFizz.png'

import { useSearchParams,Link } from 'react-router-dom'

import { SidebarContext, CartContext } from '../../context'

import { CartItemType, SidebarContextType } from '../../types'
import { AuthContext } from '../../auth/context/authContext'


export const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen,setIsOpen} = useContext(SidebarContext) as SidebarContextType
  const {itemAmount} = useContext(CartContext) as CartItemType
  const { isLogged, logout } = useContext(AuthContext)
  const userWelcome = JSON.parse(localStorage.getItem('user') || '[]')

  useEffect(() => {
  },[isLogged])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter') ?? ''

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ filter: e.target.value })
  }

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-3'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <div>
          <Link to={'/'}><img className='w-24' src={newFizz} alt='' /></Link>
        </div>

        <div className='flex items-center justify-around gap-3 mx-10'>

          <div className='flex justify-center items-center'>
            <input value={filter} onChange={handleFilter} type='search' placeholder='                  filter' 
              className='bg-transparent font-light placeholder-gray-300 text-gray-900 rounded-xl border-none ring-1 ring-gray-300' />
          </div> 
          
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative' >
              <BsBag className='text-2xl' />
              <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center'>
                {itemAmount}
              </div>
          </div>

          <div>
            {isLogged ? (
              <div className='flex justify-center items-end gap-3'>
                <button onClick={logout}><FaUserCheck className='text-2xl mt-1' /></button>
                <p className='min-[320px]:hidden md:block'>{`Welcome ${userWelcome.user}`}</p>
              </div>)
              :
              (<Link to={'/login'}><button><FaUserLock className='text-2xl mt-2' /></button></Link>)
            }
          </div>
        </div>
      </div>
    </header>
  )
} 