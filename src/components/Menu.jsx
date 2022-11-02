import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineExport } from "react-icons/ai";
const Menu = () => {
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem('api_token')
        navigate('/login')
    }
    return (
        <div className='bg-lighttext dark:bg-darktext mt-2 p-4'>
            <div className='flex  justify-between items-center font-josefin'>
                <p className='text-sm '>Created By <a href="https://majdms99.github.io/portfolio/" target="_blank">Majd Salameh</a> </p>
                <button onClick={Logout} className='flex items-center'><span className='mr-1'><AiOutlineExport /></span> Logout</button>
            </div>
        </div>
    )
}

export default Menu