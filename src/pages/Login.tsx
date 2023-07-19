import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const login = () => {
        if (input === import.meta.env.VITE_PASSKEY) {
            localStorage.setItem('freyaFiUserLoggedIn', 'true')
            navigate('/')
        } else {
            setInput('')
        }
    }

    return (
        <form className="fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 p-8">
            <input type="password" value={input} onChange={e => setInput(e.target.value)} className="text-center text-2xl rounded-lg bg-secondary/75 py-2 my-2 outline-none focus:bg-white transition duration-300" />
            <button onClick={login} className="p-2 mt-4 rounded-md bg-primary text-white outline-none hover:opacity-90 transition">Ingresar</button>
        </form>
    )
}