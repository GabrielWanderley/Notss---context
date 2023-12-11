import "./styleNotss.css"
import {useContext, useEffect}from "react"
import Lixeira from "../images/Lixeira.png"

import {CustomerContext}from "../context/customer"


export function Notss (){


  const { Notss, setNotss, removeNotss } = useContext(CustomerContext);

  function deleteNot(NotssId: number) {
    removeNotss(NotssId);
  }



return(
  <div>
{Notss.map(Nota=>{

  return(
  <div className="teste" key={Nota.id}>

    <div className="container"> 
      <h2 className="titu">{Nota.titu}</h2>
      <br></br>
     
      <p className="desc">{Nota.desc}</p>
    
      <br></br>
      <button className="buttonn" onClick={()=> deleteNot(Nota.id)}><img className="image" src={Lixeira}/></button>
    </div>
  </div>
    )
    
})}
</div>
)
}
