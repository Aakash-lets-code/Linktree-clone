import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (

        <nav className='w-[90vw] flex items-center justify-between fixed top-12 right-[5vw] rounded-full pl-10 pr-3.5 py-2.5 bg-white'>

            <div className="logo flex items-center gap-16 " >

                <Link href={"/"} > <img className='h-6' src="linktree.svg" alt="linktree" /> </Link>

                <ul className='flex text-[#72766b] items-center space-x-1.5'>
                    <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Templates</li> </Link>
                    <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Marketplace</li> </Link>
                    <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Discover</li> </Link>
                    <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Pricing</li> </Link>
                    <Link href="/"> <li className=' hover:bg-[#eff0ec] text-[#74776d] px-4 py-3 rounded-lg' >Learn</li> </Link>
                </ul>

            </div>

            <div className='gap-4 text-lg flex items-center' >
                <button className="login bg-[#eff0ec] rounded-lg text-black p-4 px-6 ">Log in </button>
                <button className="signup bg-[#1e2330] rounded-full py-5 px-7 text-white">Sign up free</button>
            </div>

        </nav>
    )
}

export default Navbar