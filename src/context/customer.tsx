import {useState, createContext, ReactNode} from "react";

interface CustomerProviderProps{
  children: ReactNode;
}

interface nota {
  id:number;
  desc: string;
  titu: string;
  

}
interface notssContextData{
  
  
  Notss: nota[],

  CreateNotss:({desc, titu}: nota) =>void
  removeNotss:(NotssId: number) => void
}

export const CustomerContext = createContext ({} as notssContextData)

 function CustomerProvider ({children}: CustomerProviderProps) {

  const [Notss, setNotss] = useState<nota[]>([])
  
    function CreateNotss (Nota:nota){


      setNotss([
        ...Notss,
        Nota
    ])
   
  }
  function removeNotss (NotssId:number)  {
    const updatedNotss = [ ...Notss]
    const filtered = updatedNotss.filter((todo) => todo.id !== NotssId)
    console.log(NotssId)
   
        setNotss(filtered)
   }
  
    return(
        <CustomerContext.Provider value={{ CreateNotss, Notss , removeNotss}}>
                {children} 
        </CustomerContext.Provider>
    )
}


export default CustomerProvider

