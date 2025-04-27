'use client'
import React, { useState } from 'react'

const Markerplace = () => {

    const [text, setText] = useState("")
    return (
        <>

            <section className=' grid grid-cols-2 bg-[#780016] min-h-screen' >
 

                    <div className='ml-[12vh] flex flex-col items-start justify-center pt-[20vh]' >

                        <h2 className='text text-8xl tracking-tight font-extrabold text-[#e9c0e9] letter-spacing-[-0.02em] pb-7' >Connect <br /> more of you</h2>

                        <p className=' text-2xl pb-10 text-[#e9c0e9]' >Bring the best experiences across the internet to one <br /> place: your Linktree</p>

                        <input value={text} onChange={(e) => setText(e.target.value)} className="bg-[#fff;] rounded-lg p-6 py-5 w-[450px] text-black" type="text" placeholder="Search Link Apps and integration" />

                    </div>

                    <div className="image mr-[12vh] flex justify-center items-center pt-[20vh]" >
                        <img src="marketplace.webp" alt="image" width={600} />
                    </div>
 

            </section>

        </>
    )
}

export default Markerplace