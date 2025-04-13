import React from 'react'
import Link from 'next/link'

const Learn = () => {
    return (
        <>

            <section className=' bg-[#d2e823] min-h-screen pt-[40vh] px-[10vh] ' >

                <div className="flex justify-between items-start   text-[#000] pb-[45] " >
                    <h2 className='font-extrabold text-9xl tracking-[-0.075em] leading-24 ' >
                        LINKTREE
                        <br />
                        BLOG
                    </h2>

                    <h2 className='text-4xl font-extrabold tracking-tighter' >
                        April 4, 2025
                    </h2>
                </div>

                <div className=' mt-20' >

                    <Link href="/learn"> <button className=' bg-[#000] text-white p-9 py-6 mx-2 rounded-full font-semibold' >
                        All
                    </button></Link>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Best Practices</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Creators</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >How To</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Product News</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Success Stories</button>
                </div>
            </section>

            <section className='min-h-screen w-full'>

                <div className=' grid grid-cols-3 w-[90vw] mx-auto ml-[61px] gap-x-5 min-h-screen py-40'>

                    <div className='group w-full overflow-hidden'>
                        <div className='max-h-[450px] wfull overflow-hidden ' >
                            <img src="learn-scroll.jpg" alt="image" className='object-cover origin-center duration-300 transition-all group-hover:scale-105 ' />
                        </div>
                        <div className="text space-y-3 mt-7 group-hover:scale-[100.5%] origin-center duration-300 transition-all ">
                            <div className=' text-black-400 flex flex-row gap-x-4 ' >
                                <span>April 3, 2025 </span>| <span>Branding</span> | <span>5 min read</span>
                            </div>
                            <h3 className='text-3xl font-extrabold text-black tracking-tighter mb-4'>
                                Lissette Calveiro's Tips for Building a Personal Brand
                            </h3>
                            <div className='text-lg text-black'>
                                Business coach Lissette Calveiro shares expert strategies on audience trust, monetization, and leveraging tools like Linktree to turn your passion
                            </div>
                        </div>
                    </div>

                    <div className='group w-full overflow-hidden'>
                        <div className='max-h-[450px] wfull overflow-hidden ' >
                            <img src="learn-scroll.jpg" alt="image" className='object-cover origin-center duration-300 transition-all group-hover:scale-105 ' />
                        </div>
                        <div className="text space-y-3 mt-7 group-hover:scale-[100.5%] origin-center duration-300 transition-all ">
                            <div className=' text-black-400 flex flex-row gap-x-4 ' >
                                <span>April 3, 2025 </span>| <span>Branding</span> | <span>5 min read</span>
                            </div>
                            <h3 className='text-3xl font-extrabold text-black tracking-tighter mb-4'>
                                Lissette Calveiro's Tips for Building a Personal Brand
                            </h3>
                            <div className='text-lg text-black'>
                                Business coach Lissette Calveiro shares expert strategies on audience trust, monetization, and leveraging tools like Linktree to turn your passion
                            </div>
                        </div>
                    </div>

                    <div className='group w-full overflow-hidden'>
                        <div className='max-h-[450px] wfull overflow-hidden ' >
                            <img src="learn-scroll.jpg" alt="image" className='object-cover origin-center duration-300 transition-all group-hover:scale-105 ' />
                        </div>
                        <div className="text space-y-3 mt-7 group-hover:scale-[100.5%] origin-center duration-300 transition-all ">
                            <div className=' text-black-400 flex flex-row gap-x-4 ' >
                                <span>April 3, 2025 </span>| <span>Branding</span> | <span>5 min read</span>
                            </div>
                            <h3 className='text-3xl font-extrabold text-black tracking-tighter mb-4'>
                                Lissette Calveiro's Tips for Building a Personal Brand
                            </h3>
                            <div className='text-lg text-black'>
                                Business coach Lissette Calveiro shares expert strategies on audience trust, monetization, and leveraging tools like Linktree to turn your passion
                            </div>
                        </div>
                    </div>

                </div>

            </section>


            <section className=' w-full' >

                <div className='grid grid-cols-2 w-[90vw] mx-auto ml-[61px] pb-40 gap-8' >

                    <div className='bg-[#43e660] h-fit w-fit rounded-3xl grid grid-cols-2 px-10'>

                        <div className="image flex justify-center items-center w-[90%] rounded-3xl ">
                            <img src="learn-scroll-third(1).avif" alt="image" />
                        </div>

                        <div className="text text-black flex flex-col justify-center items-start gap-y-4 px-4 py-10" >
                            <p className='text-2xl  font-extrabold tracking-tight leading-5' >Linktree integrates with your favorite pro marketing tools.</p>

                            <p className='font-semibold pb-5 ' >Get pro analytics with AI-backed smart insights to help you grow your following.</p>

                            <button className='bg-[#1e2330] font-bold rounded-full py-5 px-7 text-white hover:bg-[#262d3e]' >Try Linktree Pro</button>
                        </div>

                    </div>

                    <div className='bg-[#cc01dd] h-fit w-fit rounded-3xl grid grid-cols-2 px-10'>

                        <div className="image flex justify-center items-center w-[90%] rounded-3xl  ">
                            <img src="learn-scroll-third(2).avif" alt="image" />
                        </div>

                        <div className="text text-white flex flex-col justify-center items-start gap-y-4 px-4 py-10" >
                            <p className='text-2xl font-extrabold tracking-tight leading-5' >Find out what's resonating with your audience.</p>

                            <p className='font-semibold pb-5 ' >Get pro analytics with AI-backed smart insights to help you grow your following.</p>

                            <button className='bg-[#1e2330] font-bold rounded-full py-5 px-7 text-white hover:bg-[#262d3e]' >Try Linktree Pro</button>
                        </div>

                    </div>

                </div>

            </section>


        </>
    )
}

export default Learn