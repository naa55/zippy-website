import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
const GuestLayout = () => {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default GuestLayout