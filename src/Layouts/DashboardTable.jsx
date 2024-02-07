import React, { useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
import { IoIosArrowForward } from "react-icons/io";

const DashboardTable = () => {
    const { orders, setCurrentOrder } = useStateContext()
    const [currentPage, setCurrentPage] = useState(1)
    const pages = [1, 2, 3, 4, 5];
    const totalPages = pages.length

    const handleClick = (item) => {
        setCurrentPage(item)
        setCurrentOrder(item)

    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setCurrentOrder(currentPage - 1)

        } else {
            setCurrentPage(1)
        }
    }

    const handleNext = () => {
        if (currentPage < 5) {
            setCurrentPage(currentPage + 1)
            setCurrentOrder(currentPage + 1)

        } else {
            setCurrentPage(5)
        }
    }

    return (
        <div>
            <nav aria-label="Page navigation">
                <ul className="flex list-style-none justify-center">
                    <li className="mr-2">
                        <button
                            onClick={() => handlePrevious()}
                            className="bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg px-3 py-2"
                        >
                            Previous
                        </button>
                    </li>
                    {pages.map((page) => (
                        <li key={page} className="mr-2">
                            <button
                                onClick={() => handleClick(page)}
                                className={`font-medium rounded-lg px-3 py-2
                            ${currentPage === page ? 'bg-green-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800 '}
                          `}

                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => handleNext()}
                            disabled={currentPage === totalPages}
                            className="bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg px-3 py-2"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="bg-white text-black rounded-lg m-4 max-h-96 overflow-y-auto">
                {orders ? (orders?.map((a) => (
                    <div
                        key={a.orderId}
                        className="p-4 md:p-8 md:flex  items-center justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full mx-auto"
                    >
                        <div className="flex flex-col  mb-2 md:mb-0">
                            <h3 className="text-gray-500 font-semibold">Tracking number</h3>
                            <h2 className="text-green-400">{a.orderId}</h2>
                        </div>
                        <div className="flex flex-col mb-2 md:mb-0">
                            <h3 className="text-gray-500 font-semibold">Route</h3>
                            <h2 className="text-gray-500">
                                <span>0</span> {a.senderAddress} - <span>0</span> {a.receiverAddress}
                            </h2>
                        </div>
                        <div className="flex flex-col mb-2 md:mb-0">
                            <h3 className="text-gray-500 font-semibold">Status</h3>
                            <h2 className="text-gray-500" style={{ minHeight: '1.5rem' }}>
                                <p className="w-24">{a.status}</p>
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <h2 className="text-green-400 text-xl">
                                <span> <IoIosArrowForward /> </span>
                            </h2>
                        </div>
                    </div>
                ))) : <p className='text-center text-xl text-gray-300'>Nothing to see here</p>}
            </div>


        </div>
    )
}

export default DashboardTable