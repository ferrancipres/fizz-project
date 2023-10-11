
import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

    const navigate = useNavigate();
    const onLogin = () => {

        navigate('/', {
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
                <input type='text' placeholder="name" value={''}  />
                <hr />
                <input type='text' placeholder="password" value={''} />
                <div className='flex justify-start items-center ml-5 text-2xl cursor-pointer'>
                    <button className='bg-black text-white' type='submit'>Login</button>
                </div>
            </form>
            
        </>

    )
}