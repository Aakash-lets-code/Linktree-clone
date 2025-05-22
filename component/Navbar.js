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
    const [subProducts, setsubProducts] = useState(null)
    const [sublearns, setsublearns] = useState(null)

    const handleLearnEnter = () => { setIsLearnHovered(true), setsublearns("learnFirst") }
    const handleLearnLeave = () => setIsLearnHovered(false)
    const handlediscoverEnter = () => setIsDiscoverHovered(true)
    const handlediscoverLeave = () => setIsDiscoverHovered(false)
    const handleProductsEnter = () => { setIsProductsHovered(true), setsubProducts("first") }
    const handleProductsLeave = () => setIsProductsHovered(false)



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

                    <li onMouseEnter={handleLearnEnter} onMouseLeave={handleLearnLeave} className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg relative' >
                        Learn

                        {isLearnHovered && <>
                            <div className='top-full left-[-40vw] absolute w-auto h-auto flex bg-transparent' >

                                <div className='mt-7 px-2 pb-2 bg-white flex justify-center rounded-2xl font-semibold ' >

                                    <div className=' h-auto  bg-white rounded-2xl ' >

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                            <div className='flex items-center justify-between' >
                                                <p className='flex items-center gap-2' >
                                                    <img src="products-in-navbar/link.svg" alt="link" width={25} className='font-bold' />
                                                    Link in bio + tools
                                                </p>
                                                <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={25} className='' />
                                            </div>
                                        </div>

                                        <div onMouseEnter={() => setsublearns("learnSecond")} className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                            <div className='flex items-center justify-between' >
                                                <p className='flex items-center gap-2' >
                                                    <img src="products-in-navbar/manage.svg" alt="link" width={25} className='font-bold' />
                                                    Manage your social media
                                                </p>
                                                <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={25} className='' />
                                            </div>
                                        </div>
                                    </div>

                                    {sublearns === "learnFirst" && <>
                                            <div className='h-auto border-x-2 border-gray-300 bg-white' >
                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >  Link in bio  </p>
                                                        <p className='text-[12px] text-gray-400' > Customize your Linktree</p>
                                                    </div>
                                                </div>

                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >  Link shortner  </p>
                                                        <p className='text-[12px] text-gray-400' > Create trackable , shareable short links</p>
                                                    </div>
                                                </div>

                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >  QR code generator  </p>
                                                        <p className='text-[12px] text-gray-400' > Turn links into scanable QR codes </p>
                                                    </div>
                                                </div>

                                                <hr className='border-b-1 border-gray-300 mx-4' />

                                                <div className='w-[25vw] p-4 py-3 rounded-lg m-2 my-3 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >  Linktree for every day social platform  </p>
                                                        <p className='text-[12px] text-gray-400' > Grow and engage your audience everywhere</p>
                                                        <div className='flex items-center gap-2 mt-3' >
                                                            <img src="products-in-navbar/insta.svg" alt="insta" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/tiktok.svg" alt="tiktok" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/linkedin.svg" alt="linkedin" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/twitter.svg" alt="twitter" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}

                                        {sublearns === "learnSecond" && <>
                                            <div className='h-auto border-x-2 border-gray-300 bg-white' >
                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >  Schedule and auto-post  </p>
                                                        <p className='text-[12px] text-gray-400' > Hands-free, hassle-free social media planning </p>
                                                    </div>
                                                </div>

                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >  Instagram auto reply  </p>
                                                        <p className='text-[12px] text-gray-400' > Automated replies and DMs triggered by comments </p>
                                                    </div>
                                                </div>

                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >  AI content & caption generator  </p>
                                                        <p className='text-[12px] text-gray-400' >I nstant AI-powered post ideas and captions  </p>
                                                    </div>
                                                </div>

                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' > Hashtag generator </p>
                                                        <p className='text-[12px] text-gray-400' >I Trending hashtag suggestions for better reach  </p>
                                                    </div>
                                                </div>

                                                <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' > Social integration for every social platform </p>
                                                        <p className='text-[12px] text-gray-400' >IPlan, auto post, and share across all platforms   </p>
                                                    </div>
                                                </div>

                                                <hr className='border-b-1 border-gray-300 mx-4' />

                                                <div className='w-[25vw] p-4 py-3 rounded-lg m-2 my-3 ' >
                                                    <div className='flex flex-col  justify-between ' >
                                                        <p className='text-[14px]' >    </p>
                                                        <p className='text-[12px] text-gray-400' > </p>
                                                        <div className='flex items-center flex-wrap gap-2 mt-3' >
                                                            <img src="products-in-navbar/insta.svg" alt="insta" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/tiktok.svg" alt="tiktok" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/linkedin.svg" alt="linkedin" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/facebook.svg" alt="facebook" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/pinterest.svg" alt="pinterest" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/thread.svg" alt="thread" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                            <img src="products-in-navbar/youtube.svg" alt="youtube" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}

                                        {sublearns === "learnFirst" && <>
                                            <div className='h-auto bg-white rounded-2xl m-2 my-3' >
                                                <div className='w-[25vw] p-4 py-3 space-y-3 '>
                                                    <p>Featured</p>
                                                    <img src="products-in-navbar/first.png" alt="image" className='w-auto' />
                                                    <div>
                                                        <p>Join 70M+ using Linktree as their link in bio</p>
                                                        <p className='text-gray-400 text-sm' > One link to share everything you create, curate, and sell across all your socials. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}

                                        {sublearns === "learnSecond" && <>
                                            <div className='h-auto bg-white rounded-2xl m-2 my-3' >
                                                <div className='w-[25vw] p-4 py-3 space-y-3 '>
                                                    <p>What's New</p>
                                                    <img src="products-in-navbar/second.png" alt="image" className='w-auto' />
                                                    <div>
                                                        <p>Boost sales with Instagram Auto-reply</p>
                                                        <p className='text-gray-400 text-sm' >Instantly reply to comments, send traffic to your offers, and turn engagement into sales—automatically.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}

                                </div>

                            </div>
                        </>}

                    </li>

                </Link>

                <li onMouseEnter={handleProductsEnter} onMouseLeave={handleProductsLeave} className=' hover:bg-[#eff0ec] text-[#202532] px-4 py-3 rounded-lg relative'>
                    Product
                    {isProductsHovered && <>
                        <div className='top-full left-[-40vw] absolute w-auto h-auto flex bg-transparent' >

                            <div className='mt-7 px-2 pb-2 bg-white flex justify-center rounded-2xl font-semibold ' >

                                <div className=' h-auto  bg-white rounded-2xl ' >
                                    <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                        <div className='flex items-center justify-between' >
                                            <p className='flex items-center gap-2' >
                                                <img src="products-in-navbar/link.svg" alt="link" width={25} className='font-bold' />
                                                Link in bio + tools
                                            </p>
                                            <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={25} className='' />
                                        </div>
                                    </div>

                                    <div onMouseEnter={() => setsubProducts("second")} className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                        <div className='flex items-center justify-between' >
                                            <p className='flex items-center gap-2' >
                                                <img src="products-in-navbar/manage.svg" alt="link" width={25} className='font-bold' />
                                                Manage your social media
                                            </p>
                                            <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={25} className='' />
                                        </div>
                                    </div>

                                    <div onMouseEnter={() => setsubProducts("third")} className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                        <div className='flex items-center justify-between' >
                                            <p className='flex items-center gap-2' >
                                                <img src="products-in-navbar/dollar.svg" alt="link" width={25} className='font-bold' />
                                                Monetize your followings
                                            </p>
                                            <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={25} className='' />
                                        </div>
                                    </div>

                                    <div onMouseEnter={() => setsubProducts("fourth")} className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 my-3.5 ' >
                                        <div className='flex items-center justify-between' >
                                            <p className='flex items-center gap-2' >
                                                <img src="products-in-navbar/graph.svg" alt="link" width={25} className='font-bold' />
                                                Measure your success
                                            </p>
                                            <img src="products-in-navbar/right-arrow.svg" alt="right-arrow" width={25} className='' />
                                        </div>
                                    </div>

                                </div>

                                {subProducts === "first" && <>
                                    <div className='h-auto border-x-2 border-gray-300 bg-white' >
                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Link in bio  </p>
                                                <p className='text-[12px] text-gray-400' > Customize your Linktree</p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Link shortner  </p>
                                                <p className='text-[12px] text-gray-400' > Create trackable , shareable short links</p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  QR code generator  </p>
                                                <p className='text-[12px] text-gray-400' > Turn links into scanable QR codes </p>
                                            </div>
                                        </div>

                                        <hr className='border-b-1 border-gray-300 mx-4' />

                                        <div className='w-[25vw] p-4 py-3 rounded-lg m-2 my-3 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Linktree for every day social platform  </p>
                                                <p className='text-[12px] text-gray-400' > Grow and engage your audience everywhere</p>
                                                <div className='flex items-center gap-2 mt-3' >
                                                    <img src="products-in-navbar/insta.svg" alt="insta" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/tiktok.svg" alt="tiktok" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/linkedin.svg" alt="linkedin" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/twitter.svg" alt="twitter" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>}

                                {subProducts === "second" && <>
                                    <div className='h-auto border-x-2 border-gray-300 bg-white' >
                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Schedule and auto-post  </p>
                                                <p className='text-[12px] text-gray-400' > Hands-free, hassle-free social media planning </p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Instagram auto reply  </p>
                                                <p className='text-[12px] text-gray-400' > Automated replies and DMs triggered by comments </p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  AI content & caption generator  </p>
                                                <p className='text-[12px] text-gray-400' >I nstant AI-powered post ideas and captions  </p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' > Hashtag generator </p>
                                                <p className='text-[12px] text-gray-400' >I Trending hashtag suggestions for better reach  </p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' > Social integration for every social platform </p>
                                                <p className='text-[12px] text-gray-400' >IPlan, auto post, and share across all platforms   </p>
                                            </div>
                                        </div>

                                        <hr className='border-b-1 border-gray-300 mx-4' />

                                        <div className='w-[25vw] p-4 py-3 rounded-lg m-2 my-3 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >    </p>
                                                <p className='text-[12px] text-gray-400' > </p>
                                                <div className='flex items-center flex-wrap gap-2 mt-3' >
                                                    <img src="products-in-navbar/insta.svg" alt="insta" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/tiktok.svg" alt="tiktok" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/linkedin.svg" alt="linkedin" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/facebook.svg" alt="facebook" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/pinterest.svg" alt="pinterest" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/thread.svg" alt="thread" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                    <img src="products-in-navbar/youtube.svg" alt="youtube" width={45} className='text-black p-3 py-2.5 bg-gray-200 rounded-2xl hover:invert' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>}

                                {subProducts === "third" && <>
                                    <div className='h-auto border-x-2 border-gray-300 bg-white' >
                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Earn with a Linktree Shop  </p>
                                                <p className='text-[12px] text-gray-400' >Sell products and earn commission </p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Sell an online course  </p>
                                                <p className='text-[12px] text-gray-400' > Create and sell your expertise easily </p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Host digital products  </p>
                                                <p className='text-[12px] text-gray-400' > Sell digital products and build your email list </p>
                                            </div>
                                        </div>

                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' > Earn by hosting sponsored links </p>
                                                <p className='text-[12px] text-gray-400' > Share brand offers and earn for every sign-up or sale </p>
                                            </div>
                                        </div>

                                    </div>
                                </>}

                                {subProducts === "fourth" && <>
                                    <div className='h-auto border-x-2 border-gray-300 bg-white' >
                                        <div className='w-[25vw] p-4 py-3 rounded-lg hover:bg-[#eff0ec] m-2 mt-1 ' >
                                            <div className='flex flex-col  justify-between ' >
                                                <p className='text-[14px]' >  Social + link analytics  </p>
                                                <p className='text-[12px] text-gray-400' > Track clicks, engagement and audience insights  </p>
                                            </div>
                                        </div>
                                    </div>
                                </>}


                                {subProducts === "first" && <>
                                    <div className='h-auto bg-white rounded-2xl m-2 my-3' >
                                        <div className='w-[25vw] p-4 py-3 space-y-3 '>
                                            <p>Featured</p>
                                            <img src="products-in-navbar/first.png" alt="image" className='w-auto' />
                                            <div>
                                                <p>Join 70M+ using Linktree as their link in bio</p>
                                                <p className='text-gray-400 text-sm' > One link to share everything you create, curate, and sell across all your socials. </p>
                                            </div>
                                        </div>
                                    </div>
                                </>}

                                {subProducts === "second" && <>
                                    <div className='h-auto bg-white rounded-2xl m-2 my-3' >
                                        <div className='w-[25vw] p-4 py-3 space-y-3 '>
                                            <p>What's New</p>
                                            <img src="products-in-navbar/second.png" alt="image" className='w-auto' />
                                            <div>
                                                <p>Boost sales with Instagram Auto-reply</p>
                                                <p className='text-gray-400 text-sm' >Instantly reply to comments, send traffic to your offers, and turn engagement into sales—automatically.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>}

                                {subProducts === "third" && <>
                                    <div className='h-auto bg-white rounded-2xl m-2 my-3' >
                                        <div className='w-[25vw] p-4 py-3 space-y-3 '>
                                            <p>Featured</p>
                                            <img src="products-in-navbar/third.png" alt="image" className='w-auto' />
                                            <div>
                                                <p> Turn Your Linktree into a Storefront That Pays </p>
                                                <p className='text-gray-400 text-sm' >Add affiliate products, share what you love, and start earning in minutes with industry-leading commissions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>}

                                {subProducts === "fourth" && <>
                                    <div className='h-auto bg-white rounded-2xl m-2 my-3' >
                                        <div className='w-[25vw] p-4 py-3 space-y-3 '>
                                            <p>Featured</p>
                                            <img src="products-in-navbar/fourth.png" alt="image" className='w-auto' />
                                            <div>
                                                <p>Grow engagement with analytics</p>
                                                <p className='text-gray-400 text-sm' >Make data-driven decisions for your Linktree and social media platforms with analytics that are easy to understand.</p>
                                            </div>
                                        </div>
                                    </div>
                                </>}


                            </div>

                        </div>
                    </>}
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