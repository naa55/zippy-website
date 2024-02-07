import React from 'react'
import { GrMapLocation } from "react-icons/gr";

const PackageTracking = () => {
    return (
        <div class="items-center h-72 mt-48">
         <p className='text-gray-400 text-center mx-auto flex justify-center items-center text-7xl mb-2'>
            <GrMapLocation/>
            </p>
          <p className='text-gray-400 text-center ml-2 font-semibold text-2xl'>No Package Tracking Data</p>
        </div>

    )
}

export default PackageTracking