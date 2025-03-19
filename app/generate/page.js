"use client"

import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Generate = () => {

    const [link, setlink] = useState('')
    const [handle, sethandle] = useState('')
    const [linktext, setlinktext] = useState('')
    const [pic, setpic] = useState("")

    const addLink = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify({
            "text": text,
            "link": link,
            "handle": handle
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const r = fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        toast(result.message)
        setlink('')
        setlinktext('')
    }


    return (

        <div className=' grid grid-cols-2 bg-[#225abf]  min-h-screen ' >
           
            <div className="col1 flex flex-col justify-center items-center ml-[5vw] gap-10">

                <div className='flex flex-col gap-3' >

                    <h1 className=' text-5xl font-extrabold my-5 ' >Create your Bittree</h1>

                    <div className="item">
                        <h2 className='font-semibold'> Step 1: Claim your Handle </h2>
                        <div className='mx3' >
                            <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Choose a handle' />

                        </div>
                    </div>

                    <div className="item">

                        <h2 className='font-semibold'> Step 2: Add Links </h2>
                        <div className='mx3' >
                            <input value={link || ""} onChange={e=>{setlink(e.target.value)}} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link ' />
                            <input value={linktext || ""} onChange={e=>{setlinktext(e.target.value)}} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link text' />
                            <button onClick={()=>addLink(linktext, link , handle)} className=' mx-2 px-5 bg-slate-900 rounded-full text-white py-3 ' >Add Link</button>
                        </div>

                    </div>

                    <div className="item">

                        <h2 className='font-semibold'> Step 3: Add Picture and Finalize </h2>

                        <div className='mx3 flex flex-col' >
                            <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link to your picture ' />
                            <button className=' w-fit mx-2 px-5 bg-slate-900 rounded-full text-white py-3'>Create your Bittree</button>
                        </div>

                    </div>


                </div>

            </div>

            <div className="col2 w-full h-screen flex justify-center items-center" >

                <img className=' h-screen w-full object-contain' src="/generate.png" alt="generate" />
                <ToastContainer />

            </div>
        </div>
    )
}

export default Generate