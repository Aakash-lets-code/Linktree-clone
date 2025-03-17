
import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const body = await request.body();
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    const result = await collection.insertOne(body)

    return Response.json({ message: 'Added' , result: result , error:false , succes:true })
  }