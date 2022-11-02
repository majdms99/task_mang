import React from 'react'
import { useState } from 'react'
import { useAlert } from 'react-alert';
import { useMutation } from 'react-query'
import { Link, useNavigate } from "react-router-dom";
import { LoginAccount } from '../api/Login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const alert = useAlert()

    const mutation = useMutation(LoginAccount, {
        onSuccess: (Data) => {
            console.log('data', Data.data.user.name);
            // queryClient.invalidateQueries('movies');
            localStorage.setItem('api_token', Data.data.access_token)
            alert.success('success Login')
            setLoading(false)
            navigate('/')
        },
        onError: (error) => {
            console.log(error);
            alert.error(error.response.data.error);
            setLoading(false)
        },
        onMutate: () => {
            setLoading(true)
        },
    });
    console.log(loading);
    const handelSubmit = () => {

        const Data = {
            "email": email,
            "password": password,

        }
        mutation.mutate(Data);
    }

    return (
        <div className='-mt-32 container w-[90%] md:w-1/2 mx-auto min-h-[350px]  bg-lighttext dark:bg-darktext'>
            <div className='relative p-4'>
                <h4 className='py-4 font-josefin text-center text-3xl'>Login</h4>


                <input
                    className='p-4 w-full mb-4 border border-gray-700 outline-none bg-lighttext dark:bg-darktext relative'
                    type="email"
                    placeholder=' Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className='p-4 w-full bg-lighttext border border-gray-700 outline-none dark:bg-darktext relative'
                    type="password"
                    placeholder=' Enter Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    loading ?
                        <button disabled onClick={handelSubmit} className='my-4 w-full p-4 bg-pink-400'>Login</button>
                        :
                        <button onClick={handelSubmit} className='my-4 w-full p-4 bg-pink-700'>Login</button>
                }

                <p className='py-2 font-josefin  text-md'>Don't Have An Account ? <Link to='/register'>Sign Up</Link> </p>
            </div>
        </div>
    )
}

export default Login