import React , {useReducer, useState} from 'react'
import "./style/style.scss"
import CartItem from './cartItem'
import Products from '../menuapi'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {subtotal,shipping,tax,total } = useSelector(state=>state.cart)
    // const dispatch = useDispatch();


  return (
    <>
      <div className="cart">
        <main>
             <CartItem />
        </main>
        

        <aside>
            <h2>subtotal: ${subtotal}</h2>
            <h2>shipping: ${shipping}</h2>
            <h2>tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
      </div>
    </>
  )
}

export default Cart
