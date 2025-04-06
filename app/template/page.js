import React from 'react'

const Template = () => {
    return (
        <>

            <div className=' bg-[#f3f3f1]'  >

                <div className=' h-[85vh]  flex flex-col gap-4 items-center justify-center pt-28 px-[5vh]' >

                    <h2 className='text-7xl font-extrabold text-[#1e2330] text-center' >
                        A Linktree Template To Suit
                        <br /> Every Brand And Creator
                    </h2>

                    <p className='text-[#75796e] text-center font-semibold' >
                        Different Link Apps, integrations and visual styles can help you create a Linktree that looks and feels like you and your
                        <br /> brand. Explore our library of custom templates to grow and connect with your audience even more easily!
                    </p>
                </div>

                <div className=' mx-[10vh] w-[80vw] min-h-screen flex py-8' >

                    <div className=" flex flex-col w-80">

                        <div className='w-full' >
                        <div className='font-bold text-3xl mb-14 ' >Browse by</div>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Fashion</button>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Health and Fitness</button>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Small Buisness</button>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Music</button>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Sports</button>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Success Stories</button>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Marketing</button>
                            <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Social Media</button>
                        </div>

                    </div>

                    <div className=' bg-blue-400 w-72 min-h-[screen] text-center rounded-xl'>

                        <img src="warburton-for-learn.png" alt="image" className='w-full rounded-xl h-[80vh] ' />

                    </div>

                </div>

            </div>
        </>
    )
}

export default Template