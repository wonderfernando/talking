import {List,PaperPlaneTilt,ArrowLeft  } from "phosphor-react"
import avatar from "../../assets/avatar-women.jpg"
import avatar1 from "../../assets/avatar.jpg"
import { useOnPageContext } from "../../Context/OnPageContext"

interface IAuthor{
  id: string,
  name: string,
  email: string
  avatar: string
}
interface IMessage{
  id: string
  author: IAuthor,
  message: string,
  destinyAuthor: IAuthor,
  createAt: Date
}
function Content({messages} :{messages: IMessage[]}) {
    const {page,changePage} = useOnPageContext()

    function handleClickBack() {  
      changePage({title: "listview"})
    }
    return (
     <div   className={`flex-1 flex flex-col h-screen  bg-gray-900 max-md:absolute max-md:top-0 transition-all duration-500 max-md:left-0 ${page.title==="listview" ? "max-md:translate-x-full" : ""}`}  > 
        <div className=" h-20 justify-between items-center  text-white flex p-4 bg-gray-950">
         <div className="flex items-center gap-2 text-gray-400">
            <button onClick={handleClickBack} className="p-23 md:hidden"><ArrowLeft size={24}/> </button>
            <img src={avatar} className="w-14 h-14 rounded-full" alt="" />
           <div className="flex flex-col">
            <strong>Maria Lemos</strong>
              <span>maria@gmail.com</span>
           </div>
         </div>
          <button className="p-4  hover:bg-gray-600 hover:text-white transition-all rounded-sm"> <List /></button>
        </div>

      <div className="p-4 flex-1 scrollbar bg-slate-200 overflow-auto h-10">
        <div className="flex flex-col gap-2">
          {
            messages && messages.map(message => (
              <div className="flex gap-4 items-center">
                <img src={avatar} className=" w-6 h-6 rounded-full" alt="" />
                <div className="flex flex-col lg:max-w-2xl bg-slate-600 p-4 text-gray-300 rounded-lg">
                  <strong className="">{message.author.name} <span className="font-normal text-xs">{message.author.email}</span></strong>
                  <span >{message.message}</span>
              </div>
            </div>
            ))
          }
         
      
{/* minhas mensagens*/}
          <div className="flex gap-4 items-center flex-row-reverse">
            <img src={avatar1} className=" w-6 h-6 rounded-full" alt="" />
            <div className="flex flex-col bg-emerald-950 p-4 lg:max-w-2xl text-gray-300 rounded-lg">
              <strong>fernando <span>wonder@gmail.com</span></strong>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, itaque hic ea sunt aliquid aperiam obcaecati assumenda impedit! Quis incidunt tempora eaque esse fugit animi aperiam quibusdam vitae molestiae praesentium!</span>
            </div>
          </div>
      
 




        </div>
  
      </div>

      <div className="text-gray-300 h-20  w-full  bg-gray-950">
          <div className="flex p-4">
            <input type="text" className="flex-1 rounded-lg bg-gray-900 pl-4 placeholder:text-gray-500 outline-none" name="" id="" placeholder="Enviar mensagem"/>
            <button className="p-4"><PaperPlaneTilt size={20}/></button>
          </div>
      </div>
        
     </div>
    )
  }
  
  export default Content