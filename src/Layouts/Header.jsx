import React, { useEffect, useState } from 'react'
import { FaRegBell } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import axiosClient from '../axios.client';
import { toast } from 'react-toastify';

const Header = () => {

    const [user, setUser] = useState({})
    useEffect(() => {
        axiosClient.get('/get_user_details')
            .then((response) => {
                if (response.data.data) {
                    setUser(response.data.data)
                } else {
                    toast.error(response.data.responseDesc)
                }
            })
            .catch((error) => {
                toast.error(error.data.responseDesc)
            })
    }, [])
    return (
        <header className="bg-white md:sticky md:top-0 md:z-10 ">
            <div className="flex  justify-between p-4 md:h-24  max-w-6xl">
                <div className="text-gray-800 ml-8 mr-8 md:ml-0 md:mr-0">
                    <h2 className="text-xl font-text-xl font-semibold">Hi {user?.name},</h2>
                    <p className="mt-2">Track and Monitor your package</p>
                </div>
                <div className="hidden md:flex items-center space-x-5">
                    <div className="text-gray-400 text-xl bg-gray-100 hover:bg-gray-300 rounded p-2 cursor-pointer">
                        <FaRegBell />
                    </div>
                    <div className="text-gray-400 text-xl bg-gray-100 hover:bg-gray-300 rounded p-2 cursor-pointer">
                        <BsPerson />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header