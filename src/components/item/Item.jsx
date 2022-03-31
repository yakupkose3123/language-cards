


const Item = (props) => {
    const{name,img,options} = props.card
  return (
      
    < div className="card">
        <img src={img} alt="" className="card-img"/>
        <h5 className="card-title">{name}</h5>     
           
    
      
    </div>
  )
}

export default Item
