import React, { useState } from 'react';
import {  Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';

import Sidebar from './Sidebar';
import { useStateContext } from '../context/ContextProvider';
import { toast } from 'react-toastify';

const Default = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const navigate = useNavigate()
    const { token } = useStateContext()

    if (!token) {
        navigate('/login')
    }

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
        toast.success('Notification message!');

    };

    return (
        <main className="font-sans bg-gray-100 min-h-screen">

            {/* Sidebar */}
            <Sidebar isSidebarVisible={isSidebarVisible} />

            {/* Toggle button for mobile */}
            <button
                className="md:hidden fixed top-4 left-4 text-gray-600 focus:outline-none"
                onClick={toggleSidebar}
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            {/* Main Content Area */}
            <main className="flex-1 ml-0 md:ml-64">

                {/* Header */}
               <Header/>

                {/* Main content goes here */}
                <Outlet />

            </main>

        </main>
    );
};

export default Default;
