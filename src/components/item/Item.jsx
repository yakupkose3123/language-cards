import { useState } from "react"
import "./Item.css"


const Item = (props) => {
    const{name,img,options} = props.card

    const [showLogo, setshowLogo] = useState(true)


    const showAnswer = () => {
      setshowLogo(!showLogo)   // her seferinde tersine çevir kardeş 
      setInterval(() => {
        setshowLogo(true)   
      }, 5000);
    }
    

  return (
      
    < div className="card" onClick={showAnswer}>
      { showLogo ?
        (<div className="front">
        <img src={img} alt="" className="card-img"/>
        <h5 className="card-title">{name}</h5> 
      </div>)
        
          :

      (<div className="back" >
        <ul>
          {options.map((option)=> <li>{option}</li>)}
        </ul>
      </div> ) }      
    </div>
  )
}

export default Item
