
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import { userTypeLogged } from "../../context/AuthProvider";


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
        console.log(newUser)
        // pensar en poner navegate -1
        navigate((-1), {
            replace: true
        });
    }

    return (
        <>
            <div className='flex justify-center items-center p-5'>
                <h1 className='text-red-700 text-2xl'>Login</h1>
                <hr />
            </div>

            <form onSubmit={onLogin}>
                <input className="bg-white" type='text' placeholder="name" name='name' value={user} onChange={ev => setUser(ev.target.value)} required />
                <hr />
                <input className='bg-white' type='text' placeholder="password" name='password' value={password} onChange={ev => setPassword(ev.target.value)} required />
                <div className='flex justify-start items-center ml-5 text-2xl cursor-pointer'>
                    <button className= 'text-black' type='submit'>Login</button>
                </div>
            </form>
            
        </>

    )
}