"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [text, setText] = useState("")
  const router = useRouter()

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>

      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 pt-[40vh] pb-[20vh] " >

        <div className=" text-[#d2e823] flex flex-col justify-center items-start ml-[5vw] gap-10 ">

          <p className=" font-extrabold text-6xl" >
            Everything you are.
            <br /> In one, simple link in
            <br />bio.
          </p>

          <p className="text-lg font-semibold" >Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="buttons w-full " >

            <input value={text} onChange={(e) => setText(e.target.value)} className="bg-[#fff;] rounded-lg p-5 text-black" type="text" placeholder="Enter your handle" />
            <button onClick={() => createTree()} className="bg-[#e9c0e9] p-5 font-semibold rounded-full mx-3 text-black" >Claim your Linktree</button>

          </div>

        </div>

        <div className="flex flex-col justify-center items-center mr-[5vw] gap-2.5 ">

          <img className=" w-3/4 " src="/home-removebg-preview.png" alt="home" />

        </div>

      </section>

      <section className="bg-[#e9c0e9] min-h-[100vh]" >

        <div className="grid grid-cols-2 gap-10 items-center justify-center py-14 pt-[20vh] ml-[5vw] " >

          <div className=" flex justify-around " >
            <img src="scroll-second.png" alt="image" />
          </div>

          <div className="space-y-4  w-full" >

            <h2 className="text-6xl font-extrabold text-[#502274]" >
              Create and customize your Linktree in minutes
            </h2>

            <p className=" text-[#502274] mt-2 " >
              Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast,
              <br /> events and more. It all comes together in a link in bio landing page designed to
              <br /> convert.
            </p>

            <button className="bg-[#502274] text-white p-5 font-semibold rounded-full mt-4 " >
              Get started for free
            </button>

          </div>
        </div>

      </section>

      <section className="bg-[#780016] min-h-screen" >

        <div className="grid grid-cols-2 gap-10 items-center justify-center py-14 pt-[20vh] ml-[5vw] " >

          <div>

            <h2 className="text-6xl font-extrabold text-[#e9c0e9]" >
              Share your Linktree from your Instagram, TikTok, Twitter and other bios
            </h2>

            <p className=" text-[#e9c0e9] mt-5 font-semibold " >
              Add your unique Linktree URL to all the platforms and places you find your
              <br /> audience. Then use your QR code to drive your offline traffic online.
            </p>

            <button className="bg-[#e9c0e9] text-black px-8 py-5 text-center font-semibold rounded-full mt-10 " >
              Get started for free
            </button>
          </div>

          <div  >
            <img src="scroll-third.png" alt="image" />
          </div>

        </div>


      </section>


      <section className="bg-[#f3f3f1] min-h-screen" >

        <div className="grid grid-cols-2 gap-10 items-center justify-center py-14 pt-[20vh] ml-[5vw] " >

          <div >
            <img src="scroll-fourth.png" alt="image" />
          </div>

          <div>


            <h2 className="text-6xl font-extrabold text-[#1e2330]" >
              Analyze your
              <br /> audience and keep
              <br /> your followers
              <br /> engaged
            </h2>

            <p className=" text-[#1e2330] mt-5 font-semibold " >
              Track your engagement over time, monitor revenue and learn what's converting your
              <br /> audience. Make informed updates on the fly to keep them coming back.
            </p>

            <button className="bg-[#e9c0e9] text-[#1e2330] px-8 py-5 text-center font-semibold rounded-full mt-10 " >
              Get started for free
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
