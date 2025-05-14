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
    const [isProductsHovered, setIsProductsHovered] = useState(false)

    const handleLearnEnter = () => setIsLearnHovered(true)
    const handleLearnLeave = () => setIsLearnHovered(false)
    const handlediscoverEnter = () => setIsDiscoverHovered(true)
    const handlediscoverLeave = () => setIsDiscoverHovered(false)
    const handleProductsEnter = () => setIsProductsHovered(true)
    const handleProductsLeave = () => setIsDiscoverHovered(false)



    return (<>{showNavbar && <nav className='w-[90vw] flex items-center justify-between fixed top-12 right-[5vw] left-[5vw] rounded-full pl-10 pr-3.5 py-2.5 bg-white z-50 font-roboto '>

        <div className="logo flex items-center gap-16 " >

            <Link href={"/"} > <img className='h-6' src="linktree.svg" alt="linktree" /> </Link>

            <ul className='flex text-[#72766b] items-center space-x-1.5'>
                <Link href="/template"> <li className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg' >Templates</li> </Link>
                <Link href="/marketplace"> <li className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg' >Marketplace</li> </Link>
                <Link href="/">

                    <li onMouseEnter={handlediscoverEnter} onMouseLeave={handlediscoverLeave} className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg relative' >Discover

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

                <Link href="/pricing"> <li className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg' >Pricing</li> </Link>

                <Link href="/learn">

                    <li onMouseEnter={handleLearnEnter} onMouseLeave={handleLearnLeave} className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg relative' > Learn

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

                <li onMouseEnter={handleProductsEnter} onMouseLeave={handleProductsLeave} className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg relative'>
                    Product
                    <div className='top-full left-[-40vw] absolute w-auto h-auto flex bg-transparent' >

                        <div className='mt-7 px-2 pb-2 bg-white flex justify-center rounded-2xl font-semibold ' >

                            <div className=' h-auto  bg-white rounded-2xl ' >
                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                    <div className='flex items-center justify-between' >
                                        <p className='flex items-center gap-2' >
                                            <img src="products-in-navbar/link.svg" alt="link" width={30} className='font-bold' />
                                            Link in bio + tools
                                        </p>
                                        <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={30} className='' />
                                    </div>
                                </div>

                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                    <div className='flex items-center justify-between' >
                                        <p className='flex items-center gap-2' >
                                            <img src="products-in-navbar/link.svg" alt="link" width={30} className='font-bold' />
                                            Link in bio + tools
                                        </p>
                                        <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={30} className='' />
                                    </div>
                                </div>

                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                    <div className='flex items-center justify-between' >
                                        <p className='flex items-center gap-2' >
                                            <img src="products-in-navbar/link.svg" alt="link" width={30} className='font-bold' />
                                            Link in bio + tools
                                        </p>
                                        <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={30} className='' />
                                    </div>
                                </div>

                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                    <div className='flex items-center justify-between' >
                                        <p className='flex items-center gap-2' >
                                            <img src="products-in-navbar/link.svg" alt="link" width={30} className='font-bold' />
                                            Link in bio + tools
                                        </p>
                                        <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={30} className='' />
                                    </div>
                                </div>

                            </div>
                            <div className='h-auto border-x-2 border-gray-300 bg-white' >
                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-3 ' >
                                    <div className='flex flex-col  justify-between ' >
                                        <p className='text-sm' >  Link in bio  </p>
                                        <p className='text-xs text-gray-400' > Customize your Linktree</p>
                                    </div>
                                </div>

                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-3 ' >
                                    <div className='flex flex-col  justify-between ' >
                                        <p className='text-sm' >  Link shortner  </p>
                                        <p className='text-xs text-gray-400' > Create trackable , shareable short links</p>
                                    </div>
                                </div>

                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-3 ' >
                                    <div className='flex flex-col  justify-between ' >
                                        <p className='text-sm' >  QR code generator  </p>
                                        <p className='text-xs text-gray-400' > Turn links into scanable QR codes </p>
                                    </div>
                                </div>

                                <hr className='border-b-1 border-gray-300 mx-4' />

                                <div className='w-[25vw] p-4 py-3 rounded-lg m-2 my-3 ' >
                                    <div className='flex flex-col  justify-between ' >
                                        <p className='text-sm' >  Linktree for every day social platform  </p>
                                        <p className='text-xs text-gray-400' > Grow and engage your audience everywhere</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto bg-white rounded-2xl m-2 my-3' >
                                <div className='w-[25vw] p-4 py-3 space-y-3 '>
                                    <p>Featured</p>
                                    <img src="products-in-navbar/first.png" alt="image" className='w-auto' />
                                    <div>
                                        <p>Join 70M+ using Linktree as their link in bio</p>
                                        <p className='text-gray-400 text-sm' >One link to share everything you create, curate, and sell across all your socials.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </li>


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