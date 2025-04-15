'use client'
import React from 'react'
import { useState } from 'react'

const Pricing = () => {

    const [isClicked, setIsClicked] = useState(null);

    return (
        <>

            <div className='bg-[#f3f3f1] min-h-screen w-full flex flex-col items-center ' >

                <div className='h-[165px] w-full bg-[#e9c0e9]' ></div>

                <div className='text-center' >
                    <h2 className='text-8xl font-extrabold tracking-tight text-[#1e2330] mt-9'>Pricing</h2>
                    <p className='text-[#1e2330] my-7 font-semibold text-[20px] ' >Save up to 30% on annual plans</p>
                </div>

                <div className="button h-14 w-52 bg-white rounded-full flex items-center justify-center shadow-md mb-12 p-1 py-0.5 ">

                    <button>Monthly</button>
                    <button>Annually</button>

                </div>

            </div>

        </>
    )
}

export default Pricing