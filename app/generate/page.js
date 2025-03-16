import React from 'react'

const Generate = () => {
    return ( 
        <div className=' grid grid-cols-2 bg-[#225abf]  min-h-screen ' >
            <div className="col1 flex flex-col justify-center items-center ml-[5vw] gap-10 mt-6">

                <div className='flex flex-col gap-3' >

                    <h1 className=' text-5xl font-extrabold my-5 ' >Create your Bittree</h1>

                    <div className="item">
                        <h2 className='font-semibold'> Step 1: Claim your Handle </h2>
                        <div className='mx3' >
                            <input className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Choose a handle' />

                        </div>
                    </div>

                    <div className="item">

                        <h2 className='font-semibold'> Step 2: Add Links </h2>
                        <div className='mx3' >
                            <input className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link text' />
                            <input className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link ' />
                            <button className=' mx-2 px-5 bg-slate-900 rounded-full text-white py-3 ' >Add Link</button>
                        </div>

                    </div>

                    <div className="item">

                        <h2 className='font-semibold'> Step 3: Add Picture and Finalize </h2>
                        
                        <div className='mx3 flex flex-col' >
                            <input className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link to your picture ' />
                            <button className=' w-fit mx-2 px-5 bg-slate-900 rounded-full text-white py-3'>Create your Bittree</button>
                        </div>

                    </div>


                </div>

            </div>

            <div className="col2 w-full h-screen flex justify-center items-center mt-6" >

                <img className=' h-screen w-full object-contain' src="/generate.png" alt="generate" />

            </div>
        </div>
    )
}

export default Generate