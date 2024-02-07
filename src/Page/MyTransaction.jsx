import React from 'react'
import { CiMoneyCheck1 } from 'react-icons/ci'

const MyTransaction = () => {
  return (
    <div class="items-center h-72 mt-48">
    <p className='text-gray-400 text-center mx-auto flex justify-center items-center text-7xl mb-2'>
       <CiMoneyCheck1/>
       </p>
     <p className='text-gray-400 text-center ml-2 font-semibold text-2xl'>No Transaction</p>
   </div>
  )
}

export default MyTransaction