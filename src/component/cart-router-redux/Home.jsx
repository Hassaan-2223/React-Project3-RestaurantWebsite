import React , {useState} from 'react'
import Product from './product';
import "./style/style.scss"
import Products from "../menuapi";
import toast from 'react-hot-toast';



const Home = () => {
    const [cardItem,setCardItem] = useState(Products)
    
  return (
    <>
      <Product cardItem = {cardItem} toast={toast}/>
    </>
  )
}

export default Home;
