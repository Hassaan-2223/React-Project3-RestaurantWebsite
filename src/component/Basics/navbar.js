// rafce
import React from 'react';
import "./style.css";
// import Products from '../menuapi';


function Navbar({filterItem,uniqueData}) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
            {uniqueData.map((curElem)=>{
                return <button className="btn-group__item" onClick={()=>filterItem(curElem)}>{curElem}
                </button>

            })}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
