'use client'
import React from 'react'
import { useState } from 'react'

const Pricing = () => {

    const [isClicked, setIsClicked] = useState(null);

    return (
        <>

            <section>


                <div className='bg-[#f3f3f1] min-h-screen w-full flex flex-col items-center ' >

                    <div className='h-[165px] w-full bg-[#e9c0e9]' ></div>

                    <div className='text-center' >
                        <h2 className='text-8xl font-extrabold tracking-tight text-[#1e2330] mt-9'>Pricing</h2>
                        <p className='text-[#1e2330] my-7 font-semibold text-[20px] ' >Save up to 30% on annual plans</p>
                    </div>

                    <div className="pricing-plans w-[90vw] min-h-screen ml-[2vw] flex flex-col items-center " >

                        <div className="button h-14 w-52 bg-white rounded-full flex items-center justify-center shadow-md mb-12 p-1 py-0.5 ">

                            <button onClick={() => setIsClicked("left")} className={`${isClicked === "left" ? 'bg-[#1e2330] text-white' : ' bg-white '} rounded-full w-full h-full transition-colors duration-300 ease-in-out`} >Monthly</button>
                            <button onClick={() => setIsClicked("right")} className={`${isClicked === "right" ? 'bg-[#1e2330]  text-white ' : ' bg-white '}rounded-full w-full h-full transition-colors duration-300 ease-in-out`} >Annually</button>

                        </div>

                        <div className='plans w-[96%] pt-8 grid grid-cols-4 gap-4 mb-36 ' >

                            <div className='w-full bg-[#fff] rounded-4xl h-auto '>

                                <div className='type pt-12 pb-6 px-6 bg-[#bbbeac] text-3xl font-semibold rounded-t-4xl'>
                                    <h3>Free</h3>
                                </div>
                                <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <div>
                                        <p>Boost your digital presence <br /> and monetize your socials</p>
                                        <p className='text-[15px]' >Key features: <br /> </p>
                                        <div className="mt-6 mb-10">

                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    <strong> Unlimited link </strong>
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    <strong> Multi-factor authentication </strong> for an additional layer of security
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Drive your offline traffic online with  <strong> QR codes </strong>
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Grow your <strong> cross-channel following </strong> and connect all of your social profiles with one easy link
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Sell your merchandise and affiliate products with our <strong> Shop </strong> tab
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-1 mt-52' >
                                        <div className=' text-3xl font-semibold' >
                                            Rs.0
                                        </div>
                                        <div className=' text-sm' >
                                            Free, forever
                                        </div>
                                        <a href="#" className='text-center rounded-full border-[1px] border-[#d1c3cd] py-5 w-full text-sm font-semibold mt-8' >Join for free</a>
                                    </div>

                                </div>

                            </div>

                            <div className='w-full bg-[#fff] rounded-4xl h-auto '>

                                <div className='type pt-12 pb-6 px-6 bg-[#bbbeac] text-3xl font-semibold rounded-t-4xl'>

                                    <h3>Starter</h3>
                                </div>
                                <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <div>
                                        <p>Capture attention and engage visitors effortlessly</p>
                                        <p className='text-[15px]' >Everything in Free, plus:<br /> </p>
                                        <div className="mt-6 mb-10">

                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    <strong>Schedule</strong> a link to go live and disappear at specific dates and times
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Add <strong>animations</strong> to your most important links to highlight what's important
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    <strong>Customize</strong> your button colors and shapes, and choose the font that aligns with your brand or style
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    <strong>Spotlight</strong> a link so that the content is already on display when a visitor lands on your Linktree
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    View the <strong>performance</strong> of a specific link or social icon and track your commerce revenue
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start gap-1 mt-28' >
                                        <div className=' text-3xl font-semibold' >
                                            Rs.0
                                        </div>
                                        <div className=' text-sm' >
                                            Free, forever
                                        </div>
                                        <a href="#" className='text-center rounded-full border-[1px] border-[#d1c3cd] py-5 w-full text-sm font-semibold mt-8' >Get Started</a>
                                    </div>

                                </div>

                            </div>

                            <div className='w-full bg-[#fff] rounded-4xl h-auto '>

                                <div className='type pt-12 pb-6 px-6 bg-[#502274] text-3xl text-white font-semibold rounded-t-4xl'>
                                    <h3>Pro</h3>
                                </div>
                                <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <div>
                                        <p>Elevate your brand, unlock insights and supercharge growth</p>
                                        <p className='text-[15px]' >Everything in Starter, plus:</p>
                                        <div className="mt-6 mb-10">

                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Create a <strong>bespoke</strong> Linktree that matches your branding or style. Add text, images, thumbnails and animated backgrounds
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Gain deeper <strong>insights</strong> with comprehensive location/referrer based analytics and conversion tracking
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Collect <strong>email addresses and phone numbers</strong> directly from your Linktree to build your own visitor list
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    <strong>Marketing tech</strong> capabilities including SEO settings, Google Analytics, Zapier and Mailchimp integrations.
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-1 mt-9' >
                                        <div className=' text-3xl font-semibold' >
                                            Rs.0
                                        </div>
                                        <div className=' text-sm' >
                                            Free, forever
                                        </div>
                                        <a href="#" className='text-center rounded-full border-[1px] border-[#d1c3cd] bg-[#e9c0e9] py-5 w-full text-sm font-semibold mt-8' >Try Pro for free</a>
                                    </div>

                                </div>

                            </div>

                            <div className='w-full bg-[#fff] rounded-4xl h-auto '>
                                <div className='type pt-12 pb-6 px-6 bg-[#bbbeac] text-3xl font-semibold rounded-t-4xl'>
                                    <h3>Premium</h3>
                                </div>
                                <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <div>
                                        <p>Gain personalized, high touch support to build your best Linktree</p>
                                        <p className='text-[15px]' >Everything in Pro, plus:<br /> </p>
                                        <div className="mt-6 mb-10">

                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Get <strong>tailored onboarding</strong> to help you get setup and optimise your Linktree from day one
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Priority <strong>customer support</strong> with a response time of 4 hours or less
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    Access to <strong>unlimited historical insights</strong> from the lifetime of your Linktree
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>
                                                    <strong>Export</strong> your analytics data
                                                </p>
                                            </div>
                                            <div className='py-4 pr-4 flex items-start border-y-[1.5px] border-[#d1c3cd] gap-2 text-sm' >
                                                <img src="check.svg" alt="check" />
                                                <p>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-1 mt-[170px]' >
                                        <div className=' text-3xl font-semibold' >
                                            Rs.0
                                        </div>
                                        <div className=' text-sm' >
                                            Free, forever
                                        </div>
                                        <a href="#" className='text-center rounded-full border-[1px] border-[#d1c3cd] py-5 w-full text-sm font-semibold mt-8' >Get Premium</a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Pricing