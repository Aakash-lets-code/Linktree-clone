"use client"

import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';


const Generate = () => {

    const searchParams = useSearchParams()

    // const [link, setlink] = useState('')
    // const [linktext, setlinktext] = useState("")
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handlChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link, linktext }
                }
                else {
                    return item
                }

            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }


    const submitLinks = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc":desc
        });

        console.log(raw)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const r = fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        }
        else {
            toast.error(result.message)
        }
    }


    return (

        <div className=' grid grid-cols-2 bg-[#225abf]  min-h-screen ' >

            <div className="col1 flex flex-col justify-center items-center ml-[5vw] gap-10">

                <div className='flex flex-col gap-3' >

                    <h1 className=' text-5xl font-extrabold my-5 ' >Create your Bittree</h1>

                    <div className="item">
                        <h2 className='font-semibold'> Step 1: Claim your Handle </h2>
                        <div className='mx3' >
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Choose a handle' />

                        </div>
                    </div>

                    <div className="item">

                        <h2 className='font-semibold'> Step 2: Add Links </h2>

                        {links && links.map((item, index) => {
                            return <div key={index} className='mx3' >
                                <input value={item.linktext || ""} onChange={e => { handlChange(index, e.target.value, item.link) }} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link text' />
                                <input value={item.link || ""} onChange={e => { handlChange(index, e.target.value, item.linktext) }} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link' />
                            </div>
                        })}
                        <button onClick={() => addLink()} className=' mx-2 px-5 bg-slate-900 rounded-full text-white py-3 ' >+ Add Link</button>

                    </div>

                    <div className="item">

                        <h2 className='font-semibold'> Step 3: Add Picture and Description </h2>

                        <div className='mx3 flex flex-col' >
                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter link to your picture ' />
                            <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className='bg-green-50 p-2 rounded-full px-5 focus:outline-pink-600 m-3' type="text" placeholder=' Enter description ' />
                            <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onChange={() => { submitLinks() }} className=' disabled:bg-slate-500 w-fit mx-2 px-5 bg-slate-900 rounded-full text-white py-3'>Create your Bittree</button>
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