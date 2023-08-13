import {  List ,MagnifyingGlass, X, Pencil,UsersThree, PhoneCall} from "phosphor-react"
import avatar from "../../assets/avatar.jpg"
import { useOnPageContext } from "../../Context/OnPageContext"
import Avatar from "../Avatar"
import {useState} from "react"

interface IAuthor{
    id: string,
    name: string,
    email: string,
    avatar: string
 }
 interface IMessage{
    id: string
    author: IAuthor,
    message: string,
    destinyAuthor: IAuthor,
    createAt: Date
 }
function SideBar({messages, setMess} : {messages:IMessage[], setMess: ()=> void}) {
 const {changePage} = useOnPageContext()

 const[isMenuOpen,setMenuOpen] = useState(false)




 
    function handleViewMessage() {
        changePage({title: "message"})
       setMess()
    }
    return (
     <div className="w-96 relative flex flex-col max-h-screen  bg-slate-100 border-r-2 border-gray-800 max-md:w-screen ">
       <div className={`${!isMenuOpen ? "-translate-x-full" : "translate-x-0"} transition-all p-2 w-11/12 border-r-2  border-slate-300 absolute bg-slate-200 min-h-screen`}>
            <div className="flex justify-between border-b-2 border-slate-300 pb-2 items-start">
                <div className="flex flex-col ">
                    <Avatar/>
                    <div className="flex-1 flex flex-col text-slate-700">
                        <strong>Fernando</strong>
                        <span>wonder@gmail.com</span>
                    </div>
                </div>
                <button onClick={()=>setMenuOpen(false)} ><X size={32} className="text-gray-600"/></button> 
            </div>
            <div>
                <ul className="flex flex-col w-full text-left text-slate-800">
                    <li className="transition-all hover:bg-slate-300 rounded-md cursor-pointer p-2 flex gap-2 "><Pencil size={24}/>Editar Perfil</li>
                    <li className="transition-all hover:bg-slate-300 rounded-md cursor-pointer p-2 flex gap-2"><UsersThree size={24}/>Criar Chat</li>
                    <li className="transition-all hover:bg-slate-300 rounded-md cursor-pointer p-2 flex gap-2"><PhoneCall size={24}/>Contactos</li>
                </ul>
            </div>
       </div>
       
        <div>
            <div className=" h-20 justify-between items-center  text-white flex p-4 bg-gray-950">
                <img src={avatar} className="w-14 h-14 rounded-full" alt="" />
            <button onClick={()=>setMenuOpen(true)} className="p-4  hover:bg-gray-600 hover:text-white transition-all rounded-sm"> <List/></button>
            </div>
            <div className="px-4">
                <div className="rounded-lg w-full mt-2 p-2 flex gap-2 bg-gray-300">
                    <span className=" text-slate-600"><MagnifyingGlass size={20}/></span>
                    <input type="text" className="flex-1 bg-transparent outline-none border-none text-slate-600" placeholder="Procurar..." />
                </div>
            </div>
        </div>
       
         <div className="px-4 pb-4  flex-1  text-gray-600 scrollbar overflow-auto">
          {
           messages && messages.map(message => {
            return <div key={message.id} onClick={handleViewMessage} className="border-b-2 flex justify-center p-2 gap-2 h-20 overflow-hidden cursor-pointer hover:bg-gray-200 rounded-sm transition-all border-gray-200 pb-1 items-center mt-2 ">
                <div className=" border-2 border-zinc-300 rounded-full">
                    <img  src={message.author.avatar} className="border-3 border-zinc-900 bg-gray-900  w-14 h-14 rounded-full" alt="" />  
                </div>
                <div className="flex-1 flex flex-col">
                    <strong>{message.author.name}</strong>
                    <span>{message.message}</span>
                 </div>
             </div>
          })
        }   
          
        <div className="text-gray-500 text-center pt-2">
            <span> &copy; All Rights Reserved - <code>TALKING</code></span>
         </div>
         </div>
         
     </div>
    )
  }
  
  export default SideBar