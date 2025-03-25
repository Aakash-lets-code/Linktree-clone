import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // if the handle is already claimed , you cannot create bittree

    const item = await collection.findOne({ handle: handle })
    if(!item) {
        return notFound()
    }

    const item2 = ["copy the object from database"]

    return <div className="bg-purple-500 min-h-screen flex justify-center items-start my-10" >

        {item && <div className="photo flex flex-col items-center gap-4" >

            <img src={item.image} alt="profile image" />

            <span className="text-3xl font-bold" >@{item.handle}</span>
            <span className="desc w-80 text-center">
                {item.desc}
            </span>

            <div className="link">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link} > <div className="py-4 px-2 rounded-md my-3 bg-slate-100 min-w-96 flex justify-center items-center">
                        {item.linktext}
                        {item.link}
                    </div> </Link>
                })}
            </div>

        </div>}

    </div>
}