"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate", "/learn", "/template", "/pricing", "/marketplace"].includes(pathname)
    const [isLearnHovered, setIsLearnHovered] = useState(false)
    const [isDiscoverHovered, setIsDiscoverHovered] = useState(false)

    const handleLearnEnter = () => setIsLearnHovered(true)
    const handleLearnLeave = () => setIsLearnHovered(false)
    const handlediscoverEnter = () => setIsDiscoverHovered(true)
    const handlediscoverLeave = () => setIsDiscoverHovered(false)

    return (<>{showNavbar && <nav className='w-[90vw] flex items-center justify-between fixed top-12 right-[5vw] left-[5vw] rounded-full pl-10 pr-3.5 py-2.5 bg-white z-50 '>

        <div className="logo flex items-center gap-16 " >

            <Link href={"/"} > <img className='h-6' src="linktree.svg" alt="linktree" /> </Link>

            <ul className='flex text-[#72766b] items-center space-x-1.5'>
                <Link href="/template"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Templates</li> </Link>
                <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Marketplace</li> </Link>
                <Link href="/">

                    <li onMouseEnter={handlediscoverEnter} onMouseLeave={handlediscoverLeave} className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg relative' >Discover

                        {isDiscoverHovered && <> <div className='absolute left-0 top-full w-56 z-10 origin-top duration-500 bg-transparent'>
                            <div className='mt-7 px-2 py-1 bg-white rounded-lg shadow-lg'>
                                <div className=' p-4 py-3 rounded-lg hover:bg-[#eff0ec] my-1' >Linktree for Instagram</div>
                                <div className=' p-4 py-3 rounded-lg hover:bg-[#eff0ec] my-1' >Linktree for youtube</div>
                                <div className=' p-4 py-3 rounded-lg hover:bg-[#eff0ec] my-1' >Linktree for Twitter</div>
                                <div className=' p-4 py-3 rounded-lg hover:bg-[#eff0ec] my-1' >Linktree for Linkedln</div>
                            </div>
                        </div></>}

                    </li>

                </Link>

                <Link href="/pricing"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Pricing</li> </Link>

                <Link href="/learn">

                    <li onMouseEnter={handleLearnEnter} onMouseLeave={handleLearnLeave} className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg relative' > Learn

                        {isLearnHovered && <> <div className='absolute left-0 top-full w-80 z-10 origin-top duration-500 bg-transparent' >
                            <div className='mt-7 px-2 py-1 bg-white rounded-lg shadow-lg '>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >The 2024 Creator Report</div>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >All Article</div>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >Creator</div>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >Trends</div>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >Best Practices</div>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >Company</div>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >Product News</div>
                                <div className=' p-4 py-2 rounded-lg hover:bg-[#eff0ec] my-1 ' >Help</div>
                            </div>
                        </div></>}

                    </li>

                </Link>
            </ul>

        </div>

        <div className='gap-4 text-lg flex items-center' >
            <button className="login bg-[#eff0ec] rounded-lg text-black p-4 px-6 ">Log in </button>
            <button className="signup bg-[#1e2330] rounded-full py-5 px-7 text-white hover:bg-[#262d3e]">Sign up free</button>
        </div>

    </nav>} </>
    )
}

export default Navbar