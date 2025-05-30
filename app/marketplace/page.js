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
                    <img src="marketplace/marketplace.webp" alt="image" width={600} />
                </div>


            </section>

            <section className='bg-white ' >

                <div className=' mx-[12vh] min-h-screen px-2 mb-32 ' >

                    <div className='flex justify-between items-center text-black pt-40 mb-12 ' >
                        <h2 className=' text-4xl font-bold ' >Share your content</h2>
                        <a href='#' className=' text-blue-600 underline text-2xl' >See 26 Apps</a>
                    </div>

                    <div className='grid grid-cols-3 mb-28' >

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-soundcloud.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-tiktok.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-twitter.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-youtube.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-cameo.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Audiomack</p>
                                <p className='text-[16px]' >Add an Audiomac player to your Linktree</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-between items-center text-black pt-20 mb-12 ' >
                        <h2 className=' text-4xl font-bold ' >Make and collect money</h2>
                        <a href='#' className=' text-blue-600 underline text-2xl' >See 11 Apps</a>
                    </div>

                    <div className='grid grid-cols-3 mb-28' >

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-gofundme.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >GoFundMe</p>
                                <p className='text-[16px]' >Promote the causes you care about most </p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-amaze.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' > Amaze</p>
                                <p className='text-[16px]' >Design and sell physical products </p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-second-shopify.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Shopify</p>
                                <p className='text-[16px]' >Display your products to boost sales</p>
                            </div>
                        </div>

                    </div>

                    <div className="h-96 w-full bg-[#b69faf] text-[#1e2330] relative rounded-4xl grid grid-cols-2 items-center mb-32" >
                        <div className='pl-14 py-7 space-y-5 ' >
                            <p className='leading-14 text-6xl font-extrabold ' >Join our developer program</p>
                            <p className='font-semibold text-xl text-slate-800 mb-6'> We're expanding access to our APIs and SDKs. </p>
                            <button className='p-4 px-10 rounded-full font-semibold text-xl text-white bg-black text-center' >Register</button>
                        </div>
                        <img src="marketplace/marketplace-scroll-third-backgroundimage.svg" alt="background" className='absolute right-0 top-0 rounded-r-4xl h-full' />
                    </div>

                    <div className='flex justify-between items-center text-black pt-20 mb-12 ' >
                        <h2 className=' text-4xl font-bold ' >Grow your following</h2>
                        <a href='#' className=' text-blue-600 underline text-2xl' >See 18 Apps</a>
                    </div>

                    <div className='grid grid-cols-3 mb-28' >

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-snapchat.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Snapchat</p>
                                <p className='text-[16px]' >Promote your Public Profile</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-reddit.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Reddit</p>
                                <p className='text-[16px]' >Showcase your Reddit profile</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-contactdetails.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Contact Details</p>
                                <p className='text-[16px]' >Easily share downloadable contact details</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-communitysms.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >  Community SMS</p>
                                <p className='text-[16px]' >Build an SMS subscriber list</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-gleam.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Gleam</p>
                                <p className='text-[16px]' >Run campaigns to grow your audience</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-form.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Form</p>
                                <p className='text-[16px]' >Collect info with a custom form</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-between items-center text-black pt-20 mb-12 ' >
                        <h2 className=' text-4xl font-bold ' >All link apps and integrations</h2>
                        <a href='#' className=' text-blue-600 underline text-2xl' >See All</a>
                    </div>

                    <div className='grid grid-cols-3 mb-28' >

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-opensea.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >OpenSea</p>
                                <p className='text-[16px]' >Showcase NFTs on your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-spotify.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Spotify</p>
                                <p className='text-[16px]' >Share your latest or favorite music</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-facebook.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Facebook</p>
                                <p className='text-[16px]' >Add Facebook videos to your Linktree</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-pinterest.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Pinterest</p>
                                <p className='text-[16px]' >Showcase Pins, boards and more</p>
                            </div>
                        </div>

                        <div className='w-auto flex items-center p-2 my-5 gap-4 '>
                            <div>
                                <img src="marketplace/marketplace-scroll-fourth-podcast.svg" alt="icons" width={60} />
                            </div>
                            <div className=' flex flex-col items-start justify-center tracking-wider gap-1.5 leading-6' >
                                <p className='text-[20px] font-bold ' >Podcasts</p>
                                <p className='text-[16px]' >Get more podcast listeners and subscribers</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <section className='bg-[#f3f3f1] min-h-screen py-52' >

                <div className='bg-white h-[50vh] mx-[12vh] rounded-3xl p-14' >

                    <div className='h-[60%] flex justify-between  ' >

                        <div className=' space-x-1.5 ' >
                            <button className="login bg-[#eff0ec] rounded-lg text-black p-4 px-6 ">Log in </button>
                            <button className="signup bg-[#d717e7] rounded-full py-5 px-7 text-white hover:bg-[#d617e7e1]">Sign up free</button>
                        </div>

                        <div className='grid grid-cols-3 space-x-28 space-y-4 text-sm font-semibold text-[#535761]' >
                            <p>About Linktree</p>
                            <p>Blog</p>
                            <p>Press</p>
                            <p>Social Good</p>
                            <p>Contact</p>
                            <p>Careers</p>
                            <p>Getting Started</p>
                            <p>Features and How-Tos</p>
                            <p>FAQs</p>
                            <p>Report a Violation</p>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Notice</p>
                            <p>Trust Center</p>
                            <p>Cookie Preferences</p>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Markerplace