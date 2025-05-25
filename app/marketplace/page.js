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

                    <div>
                        <input value={text} onChange={(e) => setText(e.target.value)} className="bg-[#fff] rounded-lg p-10 py-5 w-[450px] text-black relative" type="text" placeholder="Search Link Apps and integration" />
                        <img src="/search.svg" alt="search icon" width={28} className='absolute bottom-10 left-24' />
                    </div>

                </div>

                <div className="image mr-[12vh] flex justify-center items-center pt-[20vh]" >
                    <img src="marketplace.webp" alt="image" width={600} />
                </div>


            </section>

            <section className='bg-white ' >

                <div className=' mx-[12vh] min-h-screen px-2' >

                    <div className='flex justify-between items-center text-black pt-40 mb-12 ' >
                        <h2 className=' text-4xl font-bold ' >Share your content</h2>
                        <a href='#' className=' text-blue-600 underline text-2xl' >See 26 Apps</a>
                    </div>

                    <div className='flex flex-wrap items-center justify-around' >

                        <div className='w-auto flex items-center p-2 my-5 gap-2 '>
                            <div>
                                <img src="marketplace-scroll-second.svg" alt="icons" />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider leading-6' >
                                <p className='text-[20px] font-semibold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-2 '>
                            <div>
                                <img src="marketplace-scroll-second.svg" alt="icons" />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider leading-6' >
                                <p className='text-[20px] font-semibold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-2 '>
                            <div>
                                <img src="marketplace-scroll-second.svg" alt="icons" />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider leading-6' >
                                <p className='text-[20px] font-semibold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-2 '>
                            <div>
                                <img src="marketplace-scroll-second.svg" alt="icons" />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider leading-6' >
                                <p className='text-[20px] font-semibold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-2 '>
                            <div>
                                <img src="marketplace-scroll-second.svg" alt="icons" />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider leading-6' >
                                <p className='text-[20px] font-semibold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-2 '>
                            <div>
                                <img src="marketplace-scroll-second.svg" alt="icons" />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider leading-6' >
                                <p className='text-[20px] font-semibold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Markerplace