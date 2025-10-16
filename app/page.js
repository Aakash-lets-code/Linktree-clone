7"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import ImageSlider from "@/component/imageslider";

export default function Home() {

  const [text, setText] = useState("")
  const router = useRouter()
  const slideTexts = ['Athletes', 'Bakers', 'Influencers', 'Retailers', 'Musician', 'Artist', 'Creator', 'Coach', 'small Businesses', 'Non-profit', 'Podcasters', 'Shopify', 'YouTuber', 'TikTokers', 'Instagrammers', 'Health Educator'];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    {
      question: "Why do I need a link in bio tool?",
      answer: "A link in bio tool helps you to organize and share all your links in one place."
    },
    {
      question: "Is Linktree the original link in bio tool?",
      answer: "No, there are several other link in bio tools, but Linktree popularized it."
    },
    {
      question: "Can you get paid and sell things from a Linktree?",
      answer: "Yes, you can integrate payment links to receive payments directly from Linktree."
    },
    {
      question: "Is Linktree safe to use on all of my social media profiles?",
      answer: "Yes, Linktree is safe to use, but make sure you're using it responsibly."
    },
    {
      question: "What makes Linktree better than the other link in bio options?",
      answer: "Linktree offers a lot of customization and analytics, making it a preferred choice."
    },
    {
      question: "How can I drive more traffic to and through my Linktree?",
      answer: "Share your Linktree across your social platforms and create engaging content."
    },
    {
      question: "How many links should I have on my Linktree?",
      answer: "Keep it simple. Focus on your most important links, usually 5-7."
    },
    {
      question: "Do I need a website to use Linktree?",
      answer: "No, you don’t need a website, just a Linktree account."
    },
    {
      question: "Where can I download the app?",
      answer: "You can download the Linktree app on the App Store or Google Play."
    }
  ];

  const createTree = () =>{
    router.push(`/generate?handle=${text}`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideTexts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>

      {visible && <section>

        <div className="sticky top-0 left-0 w-full z-10 bg-[#d2e823] text-[#325a1a] md:text-base py-3 flex justify-center items-center shadow-md duration-1000 origin-bottom transition-transform">
          <p className="text-[16px] font-semibold tracking-wider">
            Time to convert clicks into customers. <u>Linktree's new growth tools are here!</u>
          </p>
          <button className="text-[#375f1a] text-2xl leading-none focus:outline-none absolute right-4 text-center" onClick={() => setVisible(false)}>
            &times;
          </button>
        </div>

      </section>}

      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 pt-[45vh] pb-[20vh]">

        <div className=" text-[#d2e823] flex flex-col justify-center items-start ml-[5vw] gap-10">

          <p className=" font-[900] text-7xl font-notoSans " >
            Everything you are.
            In one, <br /> simple link in
            bio.
          </p>

          <p className="text-lg font-semibold font-poppins text-white">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="buttons w-full">

            <input value={text} onChange={(e) => setText(e.target.value)} className="bg-[#fff;] rounded-lg p-5 px-6 text-black" type="text" placeholder="Enter your handle"/>
            <button onClick={() => createTree()} className="bg-[#e9c0e9] p-5 font-semibold rounded-full mx-3 text-black">Claim your Linktree</button>

          </div>

        </div>

        <div className="flex flex-col justify-center items-center mr-[5vw] gap-2.5 cursor-pointer">

          <img className="w-3/4" src="/home-removebg-preview.png" alt="home"/>

        </div>

      </section>

      <section className="bg-[#e9c0e9] min-h-[100vh]">

        <div className="grid grid-cols-2 gap-10 items-center justify-center pb-40 py-[29vh] ml-[5vw]">

          <div className="flex justify-around">
            <img src="scroll-second.png" alt="image"/>
          </div>

          <div className="space-y-4  w-full">

            <h2 className="text-6xl font-extrabold text-[#502274]">
              Create and customize your Linktree in minutes
            </h2>

            <p className="text-[#502274] mt-2 font-semibold " >
              Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast,
              <br /> events and more. It all comes together in a link in bio landing page designed to
              <br /> convert.
            </p>

            <button className="bg-[#502274] hover:bg-[#502274e3] text-white p-5 px-14 text-lg font-semibold rounded-full mt-4 transform-fill origin-center duration-200 cursor-pointer">
              Get started for free
            </button>

          </div>
        </div>

      </section>

      <section className="bg-[#780016] min-h-screen">

        <div className="grid grid-cols-2 gap-10 items-center justify-center py-14 pt-[20vh] ml-[5vw]">

          <div>

            <h2 className="text-6xl font-extrabold text-[#e9c0e9]">
              Share your Linktree from your Instagram, TikTok, Twitter and other bios
            </h2>

            <p className="text-[#e9c0e9] mt-5 font-semibold" >
              Add your unique Linktree URL to all the platforms and places you find your
              <br /> audience. Then use your QR code to drive your offline traffic online.
            </p>

            <button className="bg-[#e9c0e9] hover:bg-[#cea6ce] origin-center duration-200 cursor-pointer text-black px-16 py-5 text-center font-semibold rounded-full mt-10">
              Get started for free
            </button>
          </div>

          <div  >
            <img src="scroll-third.png" alt="image"/>
          </div>

        </div>


      </section>


      <section className="bg-[#f3f3f1] min-h-screen">

        <div className="grid grid-cols-2 gap-10 items-center justify-center py-14 pt-[20vh] ml-[5vw]">

          <div >
            <img src="scroll-fourth.png" alt="image"/>
          </div>

          <div>


            <h2 className="text-6xl font-extrabold text-[#1e2330]" >
              Analyze your
              <br /> audience and keep
              <br /> your followers
              <br /> engaged
            </h2>

            <p className="text-[#1e2330] mt-5 font-semibold">
              Track your engagement over time, monitor revenue and learn what's converting your
              <br /> audience. Make informed updates on the fly to keep them coming back.
            </p>

            <button className="bg-[#e9c0e9] hover:bg-[#cfa9cf] text-[#1e2330] px-16 py-4 text-center font-semibold rounded-full mt-10 text-lg origin-center duration-200">
              Get started for free
            </button>

          </div>

        </div>

      </section>

      <section className="bg-[#f3f3f1] w-full text-center">

        <div className=" px-6 pb-8 space-y-3.5">

          <div>
            <h2 className="text-7xl font-extrabold tracking-tight" > The only link in bio trusted by 50M+ </h2>
          </div>

          

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

        <div className="flex justify-center space-x-4 pt-32 pb-16">

          <div className="w-[42vw] h-auto space-y-3.5">

            <div className="bg-[#e9c0e9] flex flex-col items-center space-y-3 rounded-4xl">
              <img src="home-scroll-sixth/things.png" alt="things" className=" pt-12 pb-8 px-8" />
              <p className="font-[650] text-2xl py-8 px-3 text-[#1e2330] " >Share your content in limitless ways on your Linktree.</p>
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

        <div className="text-6xl font-extrabold text-[#1e2330] tracking-tight">

          The fast, friendly and <br /> powerful link in bio tool.

        </div>

        <button className="text-[#1e2330] text-lg font-[610] bg-[#e9c0e9] px-20 py-5 rounded-full hover:bg-[#de9fde] origin-center duration-300">Explore all plans</button>

      </section>

      <section className="bg-[#f3f3f1] min-h-screen text-center py-14">

        <div>

          <p className="text-6xl font-extrabold text-[#1e2330] tracking-tight" >As featured in...</p>

          <div className="flex items-center justify-center flex-wrap py-12 px-[15vw] gap-4" >
            <div className="text-center text-3xl px-20 py-6 bg-white rounded-4xl w-fit">
              <img src="home-scroll-eight/techcrunch.avif.svg" alt="techcrunch"/>
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

            <img src="home-scroll-eight/left.svg" alt="left" className=" border p-4 py-3.5 text-[#c7c7c8] rounded-lg cursor-pointer hover:invert duration-200"/>
            <img src="home-scroll-eight/right.svg" alt="right" className=" border p-4 py-3.5 text-black rounded-lg cursor-pointer"/>

          </div>

        </div>

      </section>

      <section className="bg-[#780016] min-h-screen text-center py-14" >

        <div className="text-6xl font-[825] text-[#e9c0e9] tracking-tighter py-12" >Got questions?</div>

        <div className="flex flex-col justify-center items-center space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-start py-14 px-12 bg-[#52000f] w-[65vw] rounded-4xl cursor-pointer hover:outline-1 hover:outline-offset-2 hover:outline-slate-900" onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center justify-between w-full">
                <p className="text-[#e9c0e9] text-3xl font-semibold">{item.question}</p>
                <img src="home-scroll-ninth/down.svg" alt="down-arrow" className={`${openIndex === index ? 'rotate-180' : ''}`} />
              </div>
              <div className={`text-[#e9c0e9] text-xl transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-screen opacity-100 mt-10' : 'max-h-0 opacity-0'}`} style={{ overflow: 'hidden' }} >
                {openIndex === index && <div>{item.answer}</div>}
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="bg-[#502274] overflow-hidden pb-28">

        <div className="min-h-screen relative">
          <div className="flex justify-between" >
            <img src="footer/man.svg" alt="man" width={475} className="rotate-y-25 rotate-z-[20deg] pt-12" />
            <img src="footer/flower.svg" alt="flower" width={550} className="align-text-bottom absolute -right-36 -bottom-[460px] z-20" />
          </div>
          <div className="absolute flex flex-col top-[35vh] right-[22vw] items-center justify-center" >
            <div className="pb-9 text-6xl text-center text-[#e9c0e9] font-extrabold" >Jumpstart your corner of the <br /> internet today</div>
            <div>
              <input value={text} onChange={(e) => setText(e.target.value)} className="bg-[#fff;] rounded-lg p-5 px-7 text-black" type="text" placeholder="Enter your handle" />
              <button onClick={() => createTree()} className="bg-[#d2e823] p-5 px-8 font-semibold rounded-full mx-3 text-black text-center" >Claim your Linktree</button>
            </div>
          </div>
        </div>

        <div className=" min-h-screen relative flex justify-center pb-20" >

          <div className="h-[80vh] w-[88vw] bg-white rounded-3xl flex flex-col" >

            <div className="flex justify-around">
              <div className="flex flex-col items-start space-y-3 pt-12" > <div className="text-3xl font-semibold text-slate-800 mb-4 " >Company</div>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">The Linktree Blog</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Engineering Blog</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Marketplace</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">What's New</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">About</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Press</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Careers</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Link in Bio</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Social Good</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Contact</p>
              </div>
              <div className="flex flex-col items-start space-y-3 pt-12" ><div className="text-3xl font-semibold text-slate-800 mb-4">Community</div>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Linktree for Enterprise</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">2023 Creator Report</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">2022 Creator Report</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Charities</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">What's Trending</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Creator Profile Directory</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Explore Templates</p>
              </div>
              <div className="flex flex-col items-start space-y-3 pt-12" ><div className="text-3xl font-semibold text-slate-800 mb-4">Support</div>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Help Topics</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Getting Started</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Linktree Pro</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Features & How-Tos</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">FAQs</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Report a Violation</p>
              </div>
              <div className="flex flex-col items-start space-y-3 pt-12" ><div className="text-3xl font-semibold text-slate-800 mb-4">Trust & Legal</div>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Terms & Conditions</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Privacy Notice</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Cookie Notice</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Trust Center</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Cookie Preferences</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Transparency Report</p>
                <p className="text-[14.5px] text-slate-900 tracking-tight cursor-pointer">Law Enforcement Access Policy</p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-12 px-20">
              <div className='gap-4 text-lg flex items-center'>
                <button className="login bg-[#eff0ec] rounded-lg text-black p-4 px-6 hover:bg-[#deded7ba] font-semibold">Log in</button>
                <button className="signup bg-[#d2e823] rounded-full py-5 px-7 text-black hover:bg-[#cee027] font-semibold">Get started for free</button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-4 px-5 rounded-full bg-[#1e2330] hover:bg-[#283045] origin-right duration-200">
                  <img src="footer/appstore.svg" alt="appstore" width={125} className="invert" />
                </div>
                <div className="p-4 px-5 rounded-full bg-[#1e2330] hover:bg-[#283045] origin-right duration-200" >
                  <img src="footer/googleplay.svg" alt="googleplay" width={125} className="invert" />
                </div>
                <div className="p-4 px-2.5 rounded-full bg-[#1e2330] hover:bg-[#283045] origin-right duration-200" >
                  <img src="footer/linktree.svg" alt="linktree" width={41} />
                </div>
                <div className="p-4 px-2.5 rounded-full bg-[#1e2330] hover:bg-[#283045] origin-right duration-200" >
                  <img src="footer/thread.svg" alt="thread" width={41} />
                </div>
                <div className="p-4 px-2.5 rounded-full bg-[#1e2330] hover:bg-[#283045] origin-right duration-200" >
                  <img src="footer/tiktok.svg" alt="tiktok" width={41} />
                </div>
                <div className="p-4 px-2.5 rounded-full bg-[#1e2330] hover:bg-[#283045] origin-right duration-200" >
                  <img src="footer/instagram.svg" alt="instagram" width={41} />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full mt-28" >

              <div className="space-x-12 flex items-center justify-center">
                <img src="footer/flag.svg" alt="flag" width={110} />
                <img src="footer/flag-1.svg" alt="flag" width={110} />
              </div>

              <div className="text-center w-[98.9vw] bg-[#502274] text-[#e6bde7] font-semibold text-lg py-9" >
                <p>We aknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our requests to <br />Elders past, present and emerging. Linktree Pty Ltd. (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
