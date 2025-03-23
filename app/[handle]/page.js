export default async function Page({ params }) {
    const { handle } = await params
    const item = [ "copy the object from database"]
        
    return <div className="bg-purple-500 min-h-screen flex justify-center items-center" >
       <div className="photo flex flex-col items-center" >
              <img src={item.image} alt="profile image" />
              <span className="text-3xl font-bold" >@{item.handle}</span>
       </div>
    </div>
}