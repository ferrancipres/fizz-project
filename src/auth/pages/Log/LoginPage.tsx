
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../context/authContext";

import { userTypeLogged } from "../../context/types";

import fizz2 from '../../../assets/img/fizz2.png'
import background from '../../../assets/img/background.jpeg'

export const LoginPage = () => {
    const { login } = useContext(AuthContext)

    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();
    const onLogin = (ev:React.FormEvent) => {  
        ev.preventDefault();
        const newUser:userTypeLogged = {
            user: user, 
            password: password,
        }
    login(newUser)
    navigate(-1)
    }

    return (
        
        <div className="grid grid-cols-1 w-full md:px-[250px] xl:px-[900px]">
            <div className='flex flex-start justify-center items-start mt-24'>
                <img className='h-12 object-cover' src={fizz2} alt='' />
            </div>
        
            <div>
                <p className="text-lg font-semibold text-center">feel the fizzle!</p>
            </div>
            
            <form className='flex flex-col px-10 gap-3' onSubmit={onLogin}>

                <input className="rounded-lg bg-gray-200 mt-16 p-2 focus:border-blue-500  focus:ouline-none" 
                type='text' 
                placeholder="name" 
                name='name' value={user} 
                onChange={ev => setUser(ev.target.value)} 
                required 
                />

                <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500  focus:ouline-none' 
                type='text' 
                placeholder="password" 
                name='password' 
                value={password} 
                onChange={ev => setPassword(ev.target.value)} 
                required 
                />

                <div className="flex text-sm justify-between text-gray-400 py-2">
                    <p className="flex- items-center"><input className="mr-2" type="checkbox" name="" id="" />Remember Me</p>
                </div>

                <button className= 'w-full my-5 py-2 bg-teal-500 shadow-lg shoadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded' 
                type='submit'>
                    Sign in
                </button>

                <div className='flex flex-start justify-center items-start mt-24'>
                    <img className='h-30' src={background} alt='' />
                </div> 
            </form>
 
        </div>         
    )
}