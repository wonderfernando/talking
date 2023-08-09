import {createContext,useState,useContext} from "react"

 interface IOpageContext{
    changePage : (page:IPage) => void
    page: IPage
}
interface IPage{
    title: "listview"|"message" 
}
export const CreateOnpageContext = createContext<IOpageContext>({} as IOpageContext)

export function OnPageContextProvider({children} : {children : React.ReactNode}) {
    const [page,setPage] = useState<IPage>({title: "listview"}) 
  function changePage(page:IPage) {
    setPage(page)
  }

    return <CreateOnpageContext.Provider value={{ changePage, page}}>
            {children}
    </CreateOnpageContext.Provider>
}

export const useOnPageContext = () => {
    return useContext(CreateOnpageContext)
}