import React from 'react';
import "./style.css"
// import Products from '../menuapi';
const Cards = ({cardData}) => {
  return (
    
    <>
        <seciton className="main-card--cointainer">
            {cardData.map((currentval)=>{
                // -------------------  OBJECT DECONSTRUCTING ---------------------
                const {image,id,category,name,description} = currentval;
                return(
                    <div className="card-container">
                        <div className="card">

                        <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">{category}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="class-description subtle">{description}
                            </span>
                            <div className="card-read">Read</div>
                        </div>

                        <img src={image} alt="" className='card-media'/>
                        <span className="card-tag subtle">Order Now</span>
                        </div>
                    </div>

                )
            })}

        </seciton>
    </>
  );
}

export default Cards;