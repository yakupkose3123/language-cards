import React from 'react'
import Header from "../header/Header"
import "./Card.css"
import {languages} from "../../helper/data";
import Item from "../item/Item"


const Card = () => {


  return (
    <div className='main-container'>
        < Header />

        <div className="container">
          <div className="row">
            
              {languages.map((eleman,index)=>{
                return <Item card = {eleman} key={index} />;             
              })}
            </div>

        </div>
    </div>
)}
export default Card
