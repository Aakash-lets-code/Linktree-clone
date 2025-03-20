
import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const body = await request.body();
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // if the handle is already claimed , you cannot create bittree

    const doc = await collection.findOne({ handle: body.handle })
    if (doc) {
      return Response.json({ message: 'This handle is already claimed' , error:true , success:false, result:null })
    }

    const result = await collection.insertOne(body)

    return Response.json({ message: 'Your bittree has been generated' , result: result , error:false , success:true })
  }