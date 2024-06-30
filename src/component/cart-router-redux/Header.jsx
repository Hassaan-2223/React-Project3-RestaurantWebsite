import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import "./style/style.scss"
import { useSelector } from 'react-redux'



const Header = () => {
  const {cartitem} = useSelector(state=>state.cart);
  return (
    <nav>
        <h2>logo Here</h2>
        <div>
            <Link className='Link' to={"/"}>Home</Link>
            <Link className='Link Link1' to={"/cart"}><FiShoppingBag />cart
                <p>{cartitem.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header
