import React from 'react'

const Navbar = () => {
    return (

        <nav className='w-[90vw] flex items-center justify-between absolute top-12 right-[5vw] rounded-full pl-10 pr-5 py-3 bg-white'>

            <div className="logo flex items-center gap-16 " >

                <img className='h-6' src="linktree.svg" alt="linktree" />

                <ul className='flex text-[#72766b] items-center space-x-1.5'>
                    <li className=' hover:bg-[#eff0ec] px-4 py-3 rounded-lg' >Templates</li>
                    <li className=' hover:bg-[#eff0ec] px-4 py-3 rounded-lg' >Marketplace</li>
                    <li className=' hover:bg-[#eff0ec] px-4 py-3 rounded-lg' >Discover</li>
                    <li className=' hover:bg-[#eff0ec] px-4 py-3 rounded-lg' >Pricing</li>
                    <li className=' hover:bg-[#eff0ec] px-4 py-3 rounded-lg' >Learn</li>
                </ul>

            </div>

            <div className='gap-4 text-lg flex items-center' >
                <button className="login bg-[#eff0ec] rounded-lg text-black p-4 px-6 ">Log in </button>
                <button className="signup bg-[#1e2330] rounded-full p-5 px-7 text-white">Sign up free</button>
            </div>

        </nav>
    )
}

export default Navbar