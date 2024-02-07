import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PiHouseSimple } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";

const Sidebar = ({ isSidebarVisible }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const currentPath = location.pathname;

        setActiveLink(currentPath);
    }, [location]);

    const handleLogOut = () => {
        localStorage.removeItem('ACCESS_TOKEN')

        window.location.href = '/login';
    }

    return (
        <aside className={`bg-white text-white h-screen w-64 fixed top-0 border border-1 border-gray-100 ${isSidebarVisible ? 'block' : 'hidden md:block'}`}>
            <ul className="py-4 my-4 mr-4 space-y-4">
                <li className="px-4 py-2 text-black cursor-pointer">
                    <h2 className="mb-8 text-xl">Zippy</h2>
                </li>
                <li className={`px-4 py-2 space-x-2 flex flex-row ${activeLink === '/dashboard' ? 'text-green-500 bg-green-100' : 'text-gray-500 hover:bg-green-100 hover:text-green-500'} cursor-pointer rounded-lg transition-width ease-in-out duration-300`}>
                    <span className='text-xl mt-1'><PiHouseSimple /></span>
                    <Link to='/dashboard' className='text-lg'>Dashboard</Link>
                </li>
                <li className={`px-4 py-2 space-x-2 flex flex-row ${activeLink === '/package-tracking' ? 'text-green-500 bg-green-100' : 'text-gray-500 hover:bg-green-100 hover:text-green-500'} cursor-pointer rounded-lg transition-width ease-in-out duration-300`}>
                    <span className='text-xl mt-1'><GrMapLocation /></span>
                    <Link to='/package-tracking' className='text-lg'>Package Tracking</Link>
                </li>


            </ul>
            <div className='mt-72 space-y-4'>
                <li className={`px-4 py-2 space-x-2 flex flex-row ${activeLink === '/settings' ? 'text-green-500 bg-green-100' : 'text-gray-500 hover:bg-green-100 hover:text-green-500'} cursor-pointer rounded-lg transition-width ease-in-out duration-300`}>
                    <span className='text-xl mt-1'><CiSettings /></span>
                    <Link to='/my-transaction' className='text-lg'>Setting</Link>
                </li>
                <li onClick={() => handleLogOut()} className={`px-4 py-2 space-x-2 flex flex-row text-red-500 hover:bg-red-100 hover:text-red-500'} cursor-pointer rounded-lg transition-width ease-in-out duration-300`}>
                    <span className='text-xl mt-1'><BiLogOut /></span>
                    <span>Logout account</span>
                </li>
            </div>
        </aside>

    )
}

export default Sidebar