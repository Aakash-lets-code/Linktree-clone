"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import ImageSlider from "@/component/imageslider";

export default function Home() {

  const [text, setText] = useState("")
  const router = useRouter()
  const slideTexts = ['Athlete', 'Baker', 'Influencer', 'Retailers', 'Musician', 'Artist', 'Creator', 'Coach', 'Business', 'Non-profit', 'Podcaster', 'Shopify', 'YouTuber', 'TikTokers', 'Instagrammer', 'Health Educator'];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);


  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideTexts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>

      {visible && <section className="" >

        <div className="fixed top-0 left-0 w-full z-auto bg-[#e9c0e9] text-[#632c88] md:text-base py-2 flex justify-center items-center shadow-md">
          <p className="text-[15px] font-bold">
            We have updated our <a href="#"><u>Terms and Conditions.</u></a> By continuing to use Linktree, you acknowledge that you have read,
            understood and agree to be bound by the updated <a href="#"><u>Terms and Conditions.</u></a>
          </p>
          <button className="text-[#632c88] text-2xl leading-none focus:outline-none absolute right-4 text-center" onClick={() => setVisible(false)}>
            &times;
          </button>
        </div>

      </section>}

      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 pt-[40vh] pb-[20vh] " >

        <div className=" text-[#d2e823] flex flex-col justify-center items-start ml-[5vw] gap-10 ">

          <p className=" font-extrabold text-6xl font-notoSans " >
            Everything you are.
            <br /> In one, simple link in
            <br />bio.
          </p>

          <p className="text-lg font-semibold font-poppins " >Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

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

        <div className="grid grid-cols-2 gap-10 items-center justify-center pb-40 py-[29vh] ml-[5vw] " >

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

      <section className="bg-[#f3f3f1] w-full text-center " >

        <div className=" px-6 pb-8 space-y-3.5 " >

          <div className="" >
            <h2 className="text-7xl font-extrabold tracking-tight" > The only link in bio trusted by 50M+ </h2>
          </div>

          {/* <div className="text-blue-500 font-extrabold text-5xl tracking-tight" >
            <p>Athlete</p>
          </div>  */}

          <div className="relative h-20 w-full text-center overflow-hidden">
            <div className="transition-transform duration-500" style={{ transform: `translateY(-${index * 5}rem)` }} >
              {slideTexts.map((text, i) => (
                <div key={i} className="h-20 flex items-center justify-center text-5xl font-extrabold text-[#2665d6] ">
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="min-w-[97vw]" >

          <ImageSlider />

        </div>

      </section>

      <section className="bg-[#f3f3f1] min-h-screen my-auto" >

        <div className=" flex justify-center space-x-4 pt-32 pb-16">

          <div className="w-[42vw] h-auto space-y-3.5" >

            <div className="bg-[#e9c0e9] flex flex-col items-center space-y-3 rounded-4xl">
              <img src="home-scroll-sixth/things.png" alt="things" className=" pt-12 pb-8 px-8" />
              <p className="font-[630] text-2xl py-8 px-3 text-[#1e2330] " >Share your content in limitless ways on your Linktree.</p>
            </div>

            <div className="bg-[#d2e823] flex flex-col items-center space-y-3 rounded-4xl">
              <img src="home-scroll-sixth/products.png" alt="products" className=" pt-12 pb-8 px-20" />
              <p className="font-[630] text-2xl py-8 px-6 text-[#1e2330] " >Sell products and collect payments. It's monetization made simple.</p>
            </div>

          </div>

          <div className="w-[42vw] h-auto bg-[#061492] p-4 flex flex-col justify-center items-center space-y-3 rounded-4xl" >

            <img src="home-scroll-sixth/group.png" alt="group" className=" w-[500] py-10 px-4 pb-6 " />
            <p className="font-[630] text-2xl text-white pb-4 px-6" >Grow, own and engage your audience by unifying them in one place.</p>

          </div>

        </div>

      </section>

      <section className="bg-[#f3f3f1] min-h-[60vh] text-center py-12 space-y-12">

        <div className="text-6xl font-extrabold text-[#1e2330] tracking-tight " >

          The fast, friendly and <br /> powerful link in bio tool.

        </div>

        <button className="text-[#1e2330] text-base font-[610] bg-[#e9c0e9] px-20 py-4 rounded-full hover:bg-[#de9fde]" >Explore all plans</button>

      </section>

      <section className="bg-[#f3f3f1] min-h-screen text-center py-14" >

        <div>

          <p className="text-6xl font-extrabold text-[#1e2330] tracking-tight" >As featured in...</p>

          <div className=" flex items-center justify-center flex-wrap py-12 px-[15vw] gap-4" >
            <div className=" text-center text-3xl px-20 py-6 bg-white rounded-4xl w-fit">
              <img src="home-scroll-eight/techcrunch.avif.svg" alt="techcrunch" />
            </div>
            <div className=" text-center text-3xl px-20 py-6 bg-white rounded-4xl w-fit">
              <img src="home-scroll-eight/insider.avif.svg" alt="insider" />
            </div>
            <div className=" text-center text-3xl px-20 py-6 bg-white rounded-4xl w-fit">
              <img src="home-scroll-eight/mashable.avif.svg" alt="mashable" />
            </div>
            <div className=" text-center text-3xl px-20 py-6 bg-white rounded-4xl w-fit">
              <img src="home-scroll-eight/fortune.avif.svg" alt="fortune" />
            </div>
            <div className=" text-center text-3xl px-20 py-6 bg-white rounded-4xl w-fit">
              <img src="home-scroll-eight/forbes.avif.svg" alt="forbes" />
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center min-h-[75vh] space-y-12 my-12" >

          <img src="home-scroll-eight/rileylemon.webp" alt="rileylemon" width={850} />

          <div className="text-6xl font-[825] text-[#1e2330] tracking-tighter " >“Linktree simplifies the process for <br /> creators to share multiple parts of <br /> themselves in one inclusive link.”</div>

          <div className="flex flex-col justify-center items-center text-[#72756c] text-xl" >
            <p>Riley Lemon,</p>
            <p>Youtuber, Content Creator</p>
          </div>

          <div className="flex justify-center items-center space-x-2.5" >

            <img src="home-scroll-eight/left.svg" alt="left" className=" border p-4 py-3.5 text-[#c7c7c8] rounded-lg cursor-pointer hover:invert" />
            <img src="home-scroll-eight/right.svg" alt="right" className=" border p-4 py-3.5 text-black rounded-lg cursor-pointer" />

          </div>

        </div>

      </section>

      <section className="bg-[#780016] min-h-screen text-center py-14" >

        <div className="text-6xl font-[825] text-[#e9c0e9] tracking-tighter py-12" >Got questions?</div>

        <div className="flex flex-col justify-center items-center space-y-4" >

          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >Why do I need a link in bio tool?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >Is Linktree the original link in bio tool?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >Can you get paid and sell things from a Linktree?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >Is Linktree safe to use on all of my social media profiles?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >What makes Linktree better than the other link in bio options?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >How can I drive more traffic to and through my Linktree?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >How many links should I have on my Linktree?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >Do I need a website to use Linktree?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>
          <div className="flex items-center justify-between py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2" >
            <p className="text-[#e9c0e9] text-3xl font-semibold" >Where can I download the app?</p>
            <img src="home-scroll-ninth/down.svg" alt="down-arrow" />
          </div>

        </div>

      </section>

    </main>
  );
}
