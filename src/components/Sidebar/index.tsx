import { List ,MagnifyingGlass} from "phosphor-react"
import avatar from "../../assets/avatar.jpg"
import { useOnPageContext } from "../../Context/OnPageContext"
import {useEffect} from "react"

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


    useEffect(()=>{
        const myMessages = messages.filter(m=> m.author.id==="1" || m.destinyAuthor.id==="1") 
        const push :any=[]
        let newPush :any=[]
        myMessages.map(m1=>{
            myMessages.map(m2=>{
               if (m1.author.id===m2.destinyAuthor.id && m1.destinyAuthor.id===m2.author.id || m1.author.id=== m2.destinyAuthor.id) {
                   newPush = [...newPush, m2]
                }
            })
        })
        push.push(newPush)
        console.log(push)

      //  console.log(myMessages)
     /*   messages.map(message=>{
            messages.map(m1=>{
                if (m1.author.id==="1" || m1.destinyAuthor.id==="1" && m1.author.id===message.author.id || m1.author.id===message.destinyAuthor.id || m1.destinyAuthor.id===message.author.id || m1.destinyAuthor.id===message.destinyAuthor.id) {
                    setLasts([...lasts, m1])
                }
            })
            setLast([...last, lasts])
          
        })*/
    },[])

/*const lastMessages = messages.map(message=> {
            if (message.author.id ==="1" || message.destinyAuthor.id==="1" ) {
                
            }
        }
    )*/



 
    function handleViewMessage() {
        changePage({title: "message"})
        setMess()
    }
    return (
     <div className="w-96 flex flex-col max-h-screen  bg-gray-800 border-r-2 border-gray-800 max-md:w-screen ">
        <div>
            <div className=" h-20 justify-between items-center  text-white flex p-4 bg-gray-950">
                <img src={avatar} className="w-14 h-14 rounded-full" alt="" />
            <button className="p-4  hover:bg-gray-600 hover:text-white transition-all rounded-sm"> <List/></button>
            </div>
            <div className="px-4">
                <div className="rounded-lg w-full mt-2 p-2 flex gap-2 bg-gray-950">
                    <span className=" text-white"><MagnifyingGlass size={20}/></span>
                    <input type="text" className="flex-1 bg-transparent outline-none border-none text-white" placeholder="Procurar..." />
                </div>
            </div>
        </div>
       
         <div className="px-4 pb-4  flex-1  text-gray-400 scrollbar overflow-auto">
          {
           messages && messages.map(message => {
            return <div onClick={handleViewMessage} className="border-b-2 flex justify-center p-2 gap-2 h-20 overflow-hidden cursor-pointer hover:bg-gray-900 transition-all border-gray-900 pb-1 items-center mt-2 ">
                <img src={message.author.avatar} className="w-14 h-14 rounded-full" alt="" />
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