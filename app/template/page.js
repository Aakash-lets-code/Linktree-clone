import React from 'react'

const Template = () => {
    return (
        <>

            <div className=' bg-[#f3f3f1] flex flex-col items-center justify-center'  >

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

                <div className='  w-[88vw] min-h-screen flex py-8 ' >

                    <div className=" flex flex-col w-1/4 ">

                        <div className='w-full ' >
                            <div className='font-bold text-3xl mb-14 ' >Browse by</div>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Fashion</button>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Marketing</button>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Small Buisness</button>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Music</button>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Health and Fitness</button>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Sports</button>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Success Stories</button>
                            <button className='text-lg font hover:bg-[#000] hover:text-white text-black border-[1px] border-solid border-slate-400  p-4 py-2 my-1 mx-1 rounded-full font-medium' >Social Media</button>
                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-center w-3/4 ' >
                        <div className='flex flex-wrap gap-4  items-center' >

                            <div>
                               <div className='w-[300px] h-[80vh] hover:opacity-10 hover:duration-300 hover:origin-center' >  
                                  <img src="warburton-for-learn.png" alt="image" className='w-full h-full rounded-4xl cursor-pointer ' />
                                  </div>
                                <span className='font-bold text-lg text-slate-700'>Warburton</span>
                            </div>
                            <div>
                               <div className='w-[300px] h-[80vh] hover:opacity-10 hover:duration-300 hover:origin-center' >  
                                  <img src="warburton-for-learn.png" alt="image" className='w-full h-full rounded-4xl cursor-pointer ' />
                                  </div>
                                <span className='font-bold text-lg text-slate-700'>Warburton</span>
                            </div>
                            <div>
                               <div className='w-[300px] h-[80vh] hover:opacity-10 hover:duration-300 hover:origin-center' >  
                                  <img src="warburton-for-learn.png" alt="image" className='w-full h-full rounded-4xl cursor-pointer ' />
                                  </div>
                                <span className='font-bold text-lg text-slate-700'>Warburton</span>
                            </div>
                            <div>
                               <div className='w-[300px] h-[80vh] hover:opacity-10 hover:duration-300 hover:origin-center' >  
                                  <img src="warburton-for-learn.png" alt="image" className='w-full h-full rounded-4xl cursor-pointer ' />
                                  </div>
                                <span className='font-bold text-lg text-slate-700'>Warburton</span>
                            </div>

                        </div>

                    </div>
                    {/* <div className='bg-blue-400 w-3/4 min-h-[screen] text-center rounded-xl'>

                        <img src="warburton-for-learn.png" alt="image" className='w-full rounded-xl h-[80vh] ' />

                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Template