import React from 'react';
import "./style.css"
import Products from '../menuapi';
import Cards from './cards';
import Navbar from './navbar';

// -------------------- UNIQUE LIST OF ALL CATEGORIES -------------------------

const uniqueList = [...new Set(Products.map((curval)=>{
  return curval.category
}
)
), "ALL"
];

// console.log(uniqueList)



const Restaurant = () => {
  // ----------- USE STATES ----------------------
  const [cardData, setcardData] = React.useState(Products);
  const [uniqueData, setUniqueData] = React.useState(uniqueList);

  // -----------------------

  const filterItem = (category)=>{
    if(category==="ALL"){
      return setcardData(Products);
    }
    const updatedList = Products.filter((currElemnet)=>{
      return(
        currElemnet.category === category
        ); 
    });

    // -------------  in use state second option is the updated value that is set to the currrent
    setcardData(updatedList);
  }

  return (
    <>
      

    {/* -------------- PROPS ----------------- */}

      <Navbar filterItem={filterItem} uniqueData={uniqueData} />
      <Cards cardData={cardData}/>
    </>
     
  );
}

export default Restaurant;
