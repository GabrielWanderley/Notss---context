
import  { useState} from "react"


import "./styleText.css"
interface notas{
    id:number,
    titulo:string,
    descrisao:string,

}

export function Text(){

 const [notas, setNotas] = useState<notas[]>([])

 const [titu, setTitu]= useState("")
 const [desc, setDesc]= useState("")

function btnNovaNotss(){
    if (!setDesc)return
    const criarNovaNotss ={
        id: Math.random(),
        titulo: titu,
        descrisao:desc,
        
    }
    setNotas(oldState=>[...oldState, criarNovaNotss])
    setTitu("")
    setDesc("")
    console.log(criarNovaNotss)
 
}

return (
    <div className="section">
        <p className="inst">Adicione o titulo e a descrição de sua anotação</p>
       
       <input type="text" placeholder="Titulo" className="title" 
       onChange={(e) => setTitu(e.target.value)}
       value={titu}/>
       
       <textarea className="description" placeholder="descrição" 
       onChange={(e) => setDesc(e.target.value)}
       value={desc}></textarea>
       
       <button className="btn" type="submit"
       onClick={btnNovaNotss}
       >enviar</button>
    </div>
    
    )
}