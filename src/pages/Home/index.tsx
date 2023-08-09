import { OnPageContextProvider } from "../../Context/OnPageContext"
import Content from "../../components/Content"
import SideBar from "../../components/Sidebar"
import {useState} from "react"

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

const messagesData : IMessage[] = [
   {
      id: "1",
      author : {
         id : "1",
         name: "fernando",
         email: "fernando",
         avatar: "public/avatar.jpg"
      },
      createAt: new Date(),
      destinyAuthor: {    
         id : "2",
         name: "Maria de Lemos",
         email: "lemos@gmail.com",
         avatar: "./public/avatar-black-woman.jpg"
      },
      message: "Boa noite",
},{
   id: "2",
   author : {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {    
      id : "2",
      name: "Maria de Lemos",
      email: "lemos@gmail.com",
      avatar: "./public/avatar-black-woman.jpg"
   },
   message: "Wey é como",
},{
   id: "3",
   author : {
      id : "2",
      name: "Maria de Lemos",
      email: "lemos@gmail.com",
      avatar: "./public/avatar-black-woman.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   message: "Tas bem fernando",
},
{
   id: "4",
   author : {
      id : "2",
      name: "Maria de Lemos",
      email: "lemos@gmail.com",
      avatar: "./public/avatar-black-woman.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   message: "Trouxe Pão",
},{
   id: "5",
   author : {
      id : "2",
      name: "Maria de Lemos",
      email: "lemos@gmail.com",
      avatar: "./public/avatar-black-woman.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   message: "Compra só gasosa",
},{
   id: "6",
   author : {
      id : "3",
      name: "Josue Martins",
      email: "Martins@gmail.com",
      avatar: "./public/avatar-man-young.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   message: "Mano, o cumbo então",
},{
   id: "7",
   author : {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "3",
      name: "Josue Martins",
      email: "Martins@gmail.com",
      avatar: "./public/avatar-man-young.jpg"
   },
   message: "Tou a trazer a cena mano",
},{
   id: "8",
   author : {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "4",
      name: "simao julio",
      email: "julio@gmail.com",
      avatar: "./public/avatar-man-young.jpg"
   },
   message: "Amanhã tem prova de fisica, avisa na bia pra trazer folha de prova",
},{
   id: "9",
   author : {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "5",
      name: "Mendeliev Newton",
      email: "newton@gmail.com",
      avatar: "public/avatar-women.jpg"
   },
   message: "Tou no banco",
},{
   id: "10",
   author : {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "6",
      name: "Jonata Test",
      avatar: "./public/avatar-women.jpg",
      email: "teste@gmail.com"
   },
   message: "Sai dai maluco",
},{
   id: "11",
   author : {
      id : "6",
      name: "Jonata Test",
      avatar: "./public/avatar-women.jpg",
      email: "teste@gmail.com"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   message: "Trouxe o duck pra adestrar",
},{
   id: "12",
   author : {
      id : "12",
      name: "Jairo Chico",
      email: "chico@gmail.com",
      avatar: "./public/avatar-man-young.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "1",
      name: "fernando",
      email: "fernando",
      avatar: "./public/avatar.jpg"
   },
   message: "Tropa! é como",
},{
   id: "13",
   author : {
      id : "12",
      name: "Jairo Chico",
      email: "chico@gmail.com",
      avatar: "./public/avatar-man-young.jpg"
   },
   createAt: new Date(),
   destinyAuthor: {
      id : "2",
      name: "Maria Lemos",
      email: "lemos",
      avatar: "./public/avatar-women.jpg"
   },
   message: "Tropa!",
}




]

const me : IAuthor = {
   id:"1",
   name : "Fernano Wonder",
   email: "wonder@gmail.com",
   avatar: "./public/avatar.jpg"
}

function Home() {
   const [author , setAuthor] = useState<IAuthor>(me)
  
   const [messages , setMessages] = useState<IMessage[]>(messagesData)

   

    return (
      <OnPageContextProvider>
         <div className="overflow-hidden px-4 flex min-h-screen w-full bg-zinc-800 relative">
            <SideBar messages={messages}/>
            <Content/>
         </div>
      </OnPageContextProvider>

    )
  }
  
  export default Home