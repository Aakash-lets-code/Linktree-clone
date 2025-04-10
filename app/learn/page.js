import React from 'react'
import Link from 'next/link'

const Learn = () => {
    return (
        <>

            <div className=' bg-[#d2e823] min-h-screen pt-[40vh] ' >

                <div className="flex justify-between items-start  mx-[5vh]  text-[#000] pb-[-45] " >
                    <h2 className='font-extrabold text-9xl tracking-tighter  ' >
                        LINKTREE
                        <br />
                        BLOG
                    </h2>

                    <h2 className='text-4xl font-extrabold tracking-tighter' >
                        April 4, 2025
                    </h2>
                </div>

                <div className=' mt-20 mx-[5vh]' >

                    <Link href="/learn"> <button className=' bg-[#000] text-white p-9 py-6 mx-2 rounded-full font-semibold' >
                        All
                    </button></Link>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Best Practices</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Creators</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >How To</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Product News</button>
                    <button className=' hover:bg-[#000] hover:text-white text-[#0b0c01] bg-[#bdd01f] p-9 py-6 mx-2 rounded-full font-semibold' >Success Stories</button>
                </div>
            </div>

            <div className='min-h-screen w-full bg-amber-900'>

                <div className=' grid grid-cols-3 w-[90vw] mx-auto ml-[61px] gap-x-5 bg-purple-500 min-h-screen py-32'>

                    <div className='bg-purple-400 overflow-hidden'>
                        <img src="learn-scroll.jpg" alt="image" className='h-[450px] w-full object-cover' />
                        <div className="text">
                            <div className=' text-black-400' >
                            April 3, 2025 | Branding | 5 min read
                            </div>
                            <h3 className='text-2xl font-extrabold text-black mb-1.5'>
                            Lissette Calveiro's Tips for Building a Personal Brand
                            </h3>
                            <div className='text-lg text-black'>
                            Business coach Lissette Calveiro shares expert strategies on audience trust, monetization, and leveraging tools like Linktree to turn your passion
                            </div>
                        </div>
                    </div>

                    <div className='bg-purple-400 overflow-hidden'>
                        <img src="learn-scroll.jpg" alt="image" className='h-[450px] w-full object-cover' />
                        <div className="text">
                            <div className=' text-black-400' >
                            April 3, 2025 | Branding | 5 min read
                            </div>
                            <h3 className='text-2xl font-extrabold text-black mb-1.5'>
                            Lissette Calveiro's Tips for Building a Personal Brand
                            </h3>
                            <div className='text-lg text-black'>
                            Business coach Lissette Calveiro shares expert strategies on audience trust, monetization, and leveraging tools like Linktree to turn your passion
                            </div>
                        </div>
                    </div>

                    <div className='bg-purple-400 overflow-hidden'>
                        <img src="learn-scroll.jpg" alt="image" className='h-[450px] w-full object-cover' />
                        <div className="text">
                            <div className=' text-black-400' >
                            April 3, 2025 | Branding | 5 min read
                            </div>
                            <h3 className='text-2xl font-extrabold text-black mb-1.5'>
                            Lissette Calveiro's Tips for Building a Personal Brand
                            </h3>
                            <div className='text-lg text-black'>
                            Business coach Lissette Calveiro shares expert strategies on audience trust, monetization, and leveraging tools like Linktree to turn your passion
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Learn