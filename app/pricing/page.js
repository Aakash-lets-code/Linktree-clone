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

                        <div className='plans min-h-screen w-[96%] bg-black pt-8 grid grid-cols-4 gap-4 mb-36 ' >
                            <div className='h-full w-full bg-[#fff] rounded-4xl min-h-[150vh] '>
                                <div className='type pt-12 pb-6 px-6 bg-[#bbbeac] text-3xl font-semibold rounded-t-4xl'>
                                    <h3>Free</h3>
                                </div>
                                <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <p>Boost your digital presence <br /> and monetize your socials</p>
                                    <p className='text-sm' >Key features: <br /> </p>
                                    <div className="mt-6 mb-10">

                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Unlimited link </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Multi-factor authentication </strong> for an additional layer of security
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Drive your offline traffic online with  <strong> QR codes </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Grow your <strong> cross-channel following </strong> and connect all of your social profiles with one easy link
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Sell your merchandise and affiliate products with our <strong> Shop </strong> tab
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='h-full w-full bg-[#fff] rounded-4xl min-h-[150vh] '>
                                <div className='type pt-12 pb-6 px-6 bg-[#bbbeac] text-3xl font-semibold rounded-t-4xl'>
                                    <h3>Starter</h3>
                                </div>
                                <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <p>Boost your digital presence <br /> and monetize your socials</p>
                                    <p className='text-sm' >Key features: <br /> </p>
                                    <div className="mt-6 mb-10">

                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Unlimited link </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Multi-factor authentication </strong> for an additional layer of security
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Drive your offline traffic online with  <strong> QR codes </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Grow your <strong> cross-channel following </strong> and connect all of your social profiles with one easy link
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Sell your merchandise and affiliate products with our <strong> Shop </strong> tab
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='h-full w-full bg-[#fff] text-white rounded-4xl min-h-[150vh] '>
                                <div className='type pt-12 pb-6 px-6 bg-[#502274] text-3xl font-semibold rounded-t-4xl'>
                                    <h3>Pro</h3>
                                </div>
                               <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <p>Boost your digital presence <br /> and monetize your socials</p>
                                    <p className='text-sm' >Key features: <br /> </p>
                                    <div className="mt-6 mb-10">

                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Unlimited link </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Multi-factor authentication </strong> for an additional layer of security
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Drive your offline traffic online with  <strong> QR codes </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Grow your <strong> cross-channel following </strong> and connect all of your social profiles with one easy link
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Sell your merchandise and affiliate products with our <strong> Shop </strong> tab
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='h-full w-full bg-[#fff] rounded-4xl min-h-[150vh] '>
                                <div className='type pt-12 pb-6 px-6 bg-[#bbbeac] text-3xl font-semibold rounded-t-4xl'>
                                    <h3>Premium</h3>
                                </div>
                                <div className="text my-5 px-6 text-[#1e2330] font-semibold text-[20px] gap-y-3 flex flex-col justify-center">

                                    <p>Boost your digital presence <br /> and monetize your socials</p>
                                    <p className='text-sm' >Key features: <br /> </p>
                                    <div className="mt-6 mb-10">

                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Unlimited link </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                <strong> Multi-factor authentication </strong> for an additional layer of security
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Drive your offline traffic online with  <strong> QR codes </strong>
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Grow your <strong> cross-channel following </strong> and connect all of your social profiles with one easy link
                                            </p>
                                        </div>
                                        <div className='py-4 pr-4 flex items-start border-y border-[1px] border-[#d1c3cd] gap-2 text-sm' >
                                            <img src="check.svg" alt="check" />
                                            <p>
                                                Sell your merchandise and affiliate products with our <strong> Shop </strong> tab
                                            </p>
                                        </div>
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