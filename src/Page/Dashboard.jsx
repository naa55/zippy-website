import React, { useEffect, useState } from 'react'
import DashboardTable from '../Layouts/DashboardTable'
import { useStateContext } from '../context/ContextProvider'

import TrackingCard from '../Layouts/TrackingCard';
import { CiSearch } from "react-icons/ci";



const Dashboard = () => {
    const { setSearch, getOrder, getOrderStatus } = useStateContext()
    const [searchItem, setSearchItem] = useState('')
    useEffect(() => {
        getOrder()
        getOrderStatus()
    }, [])

    const handleSearch = () => {
        console.log(searchItem)
        setSearch(searchItem)

    }

    return (
        <div className='flex md:flex-row flex-col'>
            <div className="max-w-4xl">
                <div className="w-full mx-auto justify-center align-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 m-4">
                        <div className="bg-white text-black w-full h-42 rounded-lg p-4">
                            <h2 className="text-xl font-text-xl font-semibold mb-2">Track your package</h2>
                            <div className="mt-4 mb-4 relative">
                                <input
                                    onChange={(e) => setSearchItem(e.target.value)}
                                    className="border border-gray-200 rounded-lg p-3 pl-10 w-full bg-gray-100"
                                    type="text"
                                    placeholder="Enter Tracking Number"
                                />
                                <CiSearch className="absolute text-xl top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                            </div>

                            <div className="flex md:flex-row flex-col md:space-x-2 space-y-2">
                                <button onClick={() =>handleSearch()} className="bg-green-600 text-white rounded p-2 w-full">Search Package</button>
                                <button className="text-green-600 bg-white rounded p-2 w-full">Can't find</button>
                            </div>
                        </div>
                        <div className="bg-green-600 text-white w-full h-42 rounded-lg p-2 space-y-4">
                            <div className="text-xl font-semibold mb-2">
                                <h2>Save up to 70%</h2>
                            </div>
                            <div className="mb-4">
                                <p className='text-lg'>Use code <span className="font-semibold">ZIPPY01</span> and save up to <span className="font-semibold">70%</span> cost</p>
                            </div>
                            <div className='mt-8'>
                                <button className="text-white bg-green-300 rounded p-3 w-full mt-8">Claim now</button>
                            </div>

                        </div>

                    </div>
                    <div className="flex flex-row m-4 justify-between">
                        <h1 className="font-bold text-xl">History</h1>
                        <h1 className="font-normal text-green-400">View All</h1>
                    </div>
                    <DashboardTable />
                </div>
            </div>
            <TrackingCard />
        </div>
    )
}

export default Dashboard