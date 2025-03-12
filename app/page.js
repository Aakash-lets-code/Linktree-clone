import Image from "next/image";

export default function Home() {
  return (
    <main>

      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 pt-[20vh] " >

        <div className=" text-[#d2e823] flex flex-col justify-center items-center ml-[5vw] gap-4 ">

          <p className=" font-extrabold text-7xl" >Everything you are. In one, simple link in bio.</p>

          <p className="text-lg font-semibold" >Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="buttons w-full " >
            <input className="bg-[#fff;] rounded-lg px-4 py-3 text-black" type="text" placeholder="linktr.ee/" />
            <button className="bg-[#e9c0e9] px-5 py-4 font-semibold rounded-full mx-3 text-black" >Claim your Linktree</button>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center mr-[5vw] gap-2.5 ">

         <img className=" w-11/12 "  src="/home.png" alt="home" />

        </div>

      </section>
      <section className="bg-[#c4fbb7] min-h-[100vh]" >


      </section>

    </main>
  );
}
