import avatar from "../../assets/avatar.jpg"
export default function Avatar() {
    return <div className=" border-2 border-zinc-300 max-w-fit rounded-full">
        <img  src={avatar} className="border-3 border-zinc-900 bg-gray-900  w-14 h-14 rounded-full" alt="" />  
    </div>
}