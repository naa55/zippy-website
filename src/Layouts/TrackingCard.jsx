import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { CiShare1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { useStateContext } from '../context/ContextProvider';


const TrackingCard = () => {
    const { status } = useStateContext()
    console.log('track', status)
    return (
        <div className=''>
            <div className="bg-white text-black h-42 rounded-lg p-4 w-full md:w-80 m-4 "> 
                <div className='flex flex-row justify-between p-2'>
                    <h2 className="text-xl font-text-lg font-semibold mb-2">Package History</h2>
                    <div className="inline-block border border-gray-100 rounded-full p-2">
                        <p className=''>
                            <RxCross1 />
                        </p>
                    </div>
                </div>
                <div className='border border-1 border-black w-full md:max-w-72 h-36 rounded flex justify-center items-center'>
                    <div className='border border-1 bg-black p-2 w-64 h-12 flex flex-row justify-center items-center space-x-2 rounded-lg text-white'>
                        <span className='text-lg text-white'>
                            <IoLocationOutline />
                        </span>
                        <span>Live Tracking</span>
                    </div>

                </div>
                <div className="mt-4 mb-4 space-y-2">
                    <p className='text-gray-500'>Tracking number</p>
                    <p className='text-green-500 text-lg'>ZIPJF20243001</p>
                </div>
                <div className='mt-2 mb-2 p-2'>
                    <hr className='tex-gray-400' />
                </div>
                <div>
                    <div className="items-center space-y-4">
                        {
                            status?.map((item, index) => (
                                <div key={index}  className='flex flex-row space-x-4'>
                                    <div>
                                        <div className="w-2 h-2 bg-green-800 rounded-full ml-0.5"></div>
                                        <div className='border border-1 border-dashed border-green-400 inline-block h-8 ml-1.5 mt-1'></div>
                                    </div>
                                    <div className='-mt-2'>
                                        <p className='text-lg ng-gray-500 font-semibold'>{item.status}</p>
                                        <p className='text-gray-400'>10:55 AM</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className='mt-2'>
                    <button className='bg-green-800 p-2 w-[270px] m-2 text-white rounded'>Print History</button>
                </div>
                <div className='mt-2'>
                    <button className='bg-green-800 p-2 w-[270px] m-2 flex flex-row text-center items-center justify-center space-x-2 rounded'>
                        <span className='text-white'><CiShare1 /></span>
                        <span className='text-white'>Share</span>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrackingCard