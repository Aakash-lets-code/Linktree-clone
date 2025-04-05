import React from 'react'

const Template = () => {
    return (
        <>

            <div className=' h-[85vh] bg-[#f3f3f1] flex flex-col gap-4 items-center justify-center pt-28 px-[5vh]' >

                <h2 className='text-7xl font-extrabold text-[#1e2330] text-center' >
                    A Linktree Template To Suit
                    <br /> Every Brand And Creator
                </h2>

                <p className='text-[#75796e] text-center font-semibold' >
                    Different Link Apps, integrations and visual styles can help you create a Linktree that looks and feels like you and your
                    <br /> brand. Explore our library of custom templates to grow and connect with your audience even more easily!
                </p>
            </div>

            <div className=' bg-[#f3f3f1] px-[5vh] min-h-screen ' >

                <div className=" flex flex-col pr-[10vh] ">

                    <div>Browse by</div>
                    <div className=' gap-5 mt-10 w-[30vw] ' >
                        <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-black  p-4 py-2 my-1mx-0.5 rounded-full font-semibold' >Fashion</button>
                        <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-black  p-4 py-2 my-1mx-0.5 rounded-full font-semibold' >Health and Fitness</button>
                        <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-black  p-4 py-2 my-1mx-0.5 rounded-full font-semibold' >Influencer and Creator</button>
                        <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-black  p-4 py-2 my-1mx-0.5 rounded-full font-semibold' >Music</button>
                        <button className=' hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-black  p-4 py-2 my-1 mx-0.5 rounded-full font-semibold' >Success Stories</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Template