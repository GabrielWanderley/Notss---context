import "./styleNotss.css"
import {useContext}from "react"
import Lixeira from "../images/Lixeira.png"

import {CustomerContext}from "../context/customer"


export function Notss (){
 
 const { Notss }= useContext(CustomerContext)
 const {removeNotss} = useContext(CustomerContext)
function deleteNot(NotssId: number){

  removeNotss(NotssId)
}

return(
  <tbody>
{Notss.map(Nota=>{

  return(
  <div className="teste">
    <tr className="container" key={Nota.id}>
       
      <td className="titu"><h2>{Nota.titu}</h2></td>
      <br></br>
     
      <td className="desc"><p>{Nota.desc}</p></td>
    
      <br></br>
      <td className="cont"><button className="buttonn" onClick={()=> deleteNot(Nota.id)}><img className="image" src={Lixeira}/></button></td>
    </tr>
  </div>
    )
    
})}
</tbody>
)
}
