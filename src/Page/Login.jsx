import React, { createRef } from 'react'
import axiosClient from '../axios.client';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import { toast } from 'react-toastify';
import Image from '../assets/image/shippingbox.webp';

const Login = () => {
    const { setToken } = useStateContext()
    const emailRef = createRef();
    const passwordRef = createRef()

    const navigate = useNavigate();
    const onSubmit = ev => {
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/login', payload)
            .then((response) => {
                if (response.data.responseCode === '002') {
                    setToken(response.data.accessToken);
                    navigate('/dashboard')
                } else {
                    toast.error(response.data.responseDesc)
                }
            })
            .catch((error) => {
                toast.error(error.data)
            })
    }
    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-5xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2 p-2 ">
                        <img className='md:h-[480px] h-[300px] rounded' src={Image} alt="ImageInfo" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <div className="flex justify-center mb-16 mt-48 md:mt-0">
                                <h1 className='font-semibold text-5xl  text-green-500'>Zippy</h1>
                            </div>

                            <div>
                                <p className='text-xl font-semibold'>Get Started Now</p>
                            </div>
                            <div className='mt-2 text-gray-400 font-semibold'>
                                <p>Enter your credientails to access your account</p>
                            </div>
                            <div className='mt-4 mb-4'>
                                <hr className='ng-gray-500' />
                            </div>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        Email
                                    </label>
                                    <input type="email"
                                        ref={emailRef}
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                                        placeholder="Your email" />
                                </div>
                                <div>
                                    <label className="block mt-4 text-sm font-bold mb-2">
                                        Password
                                    </label>
                                    <input
                                        ref={passwordRef}
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                                        placeholder="Your password" type="password" />
                                </div>

                                <button
                                    type='submit'
                                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-800 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
                                >
                                    Log in
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login