
import { useState, useContext, FormEvent} from "react"

import { CustomerContext } from '../context/customer'

import "./styleText.css"
interface nota{
    id:number;
    titu:string;
    desc:string;
}

export function Text(){
    const {CreateNotss} = useContext(CustomerContext)
 const [titu, setTitu]= useState("")
 const [desc, setDesc]= useState("")


 const Create = (event : FormEvent) => {
    event.preventDefault()
    CreateNotss({
        titu, desc, 
        id : Math.random()
     })
     setTitu("")
     setDesc("")
}

return (
  <div className="teste">
    <div className="section">
        <p className="inst">Adicione o titulo e a descrição de sua anotação</p>
    <form onSubmit={Create} className="form">
       <input type="text" placeholder="Titulo" className="title" 
       onChange={(e) => setTitu(e.target.value)}
       value={titu}/>
       
       <textarea className="description" placeholder="descrição" 
       onChange={(e) => setDesc(e.target.value)}
       value={desc}></textarea>
       
       <button className="btn" type="submit"
       onClick={()=>Create}
       >enviar</button>
    </form>   
    </div>
 </div>
    
    )
}