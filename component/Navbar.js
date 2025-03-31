"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (<>{showNavbar && <nav className='w-[90vw] flex items-center justify-between fixed top-12 right-[5vw] rounded-full pl-10 pr-3.5 py-2.5 bg-white'>

        <div className="logo flex items-center gap-16 " >

            <Link href={"/"} > <img className='h-6' src="linktree.svg" alt="linktree" /> </Link>

            <ul className='flex text-[#72766b] items-center space-x-1.5'>
                <Link href="/template"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Templates</li> </Link>
                <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Marketplace</li> </Link>
                <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Discover</li> </Link>
                <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Pricing</li> </Link>
                <Link href="/"> <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg group relative' > Learn
                    {isHovered && <>  <div className=' bg-white rounded-lg shadow-lg p-4 mt-2 absolute top-full right-0 w-16 z-10 text-center'>
                        <div>home</div>
                        <div>contact</div>
                        <div>about</div>
                    </div></>}
                </li> </Link>
            </ul>

        </div>

        <div className='gap-4 text-lg flex items-center' >
            <button className="login bg-[#eff0ec] rounded-lg text-black p-4 px-6 ">Log in </button>
            <button className="signup bg-[#1e2330] rounded-full py-5 px-7 text-white">Sign up free</button>
        </div>

    </nav>} </>
    )
}

export default Navbar