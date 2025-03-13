import React from 'react'

const Generate = () => {
    return (
        <div className=' grid grid-cols-2 bg-[#254f1a] min-h-screen ' >
            <div className="col1 flex flex-col justify-center items-start ml-[5vw] gap-10 ">
                <h1 className=' text-6xl font-extrabold ' >Welcome back!</h1>
                <input className='bg-green-50 p-3'  type="text" placeholder=' Email or Usename' />
                <button> Continue</button>
                <p> OR </p>

            </div>
            <div className="col2 w-full min-h-screen bg-blue-50">
                <div className='object-cover' >
                    <img className=' min-h-screen w-full object-cover' src="/generate.png" alt="generate" />
                </div>
            </div>
        </div>
    )
}

export default Generate