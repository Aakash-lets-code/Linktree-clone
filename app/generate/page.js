import React from 'react'

const Generate = () => {
    return (
        // <div className=' grid grid-cols-2 bg-[#254f1a] min-h-screen ' >
        <div className=' grid grid-cols-2 bg-[#225abf]  min-h-screen ' >
            <div className="col1 flex flex-col justify-center items-center ml-[5vw] gap-10 ">

                <h1 className=' text-5xl font-extrabold my-5 ' >Create your Bittree</h1>

                <div className='flex flex-col gap-3' >

                    <h2 className='font-semibold my-2 '> Step 1: Claim your Handle </h2>
                    <input className='bg-green-50 p-3 rounded-full px-5 focus:outline-pink-600 ' type="text" placeholder=' Choose a handle' />

                    <h2 className='font-semibold my-2 '> Step 2: Add Links </h2>
                    <input className='bg-green-50 p-3 rounded-full px-5 focus:outline-pink-600 ' type="text" placeholder=' Enter link text' />
                    <input className='bg-green-50 p-3 rounded-full px-5 focus:outline-pink-600 ' type="text" placeholder=' Enter link ' />

                    <h2 className='font-semibold my-2 '> Step 3: Add Picture and Finalize </h2>

                </div>

            </div>

            <div className="col2 w-full h-screen flex justify-center items-center" >

                <img className=' h-screen w-full object-contain' src="/generate.png" alt="generate" />

            </div>
        </div>
    )
}

export default Generate