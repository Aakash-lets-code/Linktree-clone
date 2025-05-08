import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import { Poppins , Roboto, Noto_Sans } from "next/font/google"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"], 
  display: "swap",
  style: ["normal","italic"],
  variable:"--font-poppins",
  weight:["100","200","300","400","500","600","700","800","900"],
});

const roboto = Roboto({
  subset:["latin"],
  display:"swap",
  variable:"--font-roboto",
  weight:["100","200","300","400","500","600","700","800","900"],
  style:["normal","italic"],
})

const notoSans = Noto_Sans({
  subset:["latin"], 
  display:"swap",
  variable:"--font-notoSans",
  weight:["100","200","300","400","500","600","700","800","900"],
  style:["normal","italic"],
})

export const metadata = {
  title: "BitTree - Your favorite link sharing site",
  description: "We brought a revolution in link sharing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${roboto.variable} ${notoSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
