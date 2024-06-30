import React from 'react'
import "./style/style.scss"
import { useDispatch, useSelector } from 'react-redux'
import { type } from '@testing-library/user-event/dist/type';


const CartItem = () => {

    // I am using use selector to use reducer we create cart and its cartitem in it.
    const {cartitem} = useSelector(state=>state.cart);

    const dispatch = useDispatch();

    // ----------------------  FUNCTIONS  --------------------------
    const handleDecrement = (item)=>{
        dispatch({type:"decrementQuantity",payload:item});
        dispatch({type:"calculateprice"});
        
    }
    const handleIncrement = (item)=>{
        dispatch({type:"incrementQuantity",payload:item});
        dispatch({type:"calculateprice"});
    }
    
  return (
    <>
        {
            cartitem.length > 0 ?(
                cartitem.map((cval)=>{
                    return(
                        
                        <div className="cartitem">
                            <img src={cval.image} alt="" />
                            <article>
                                <h3>{cval.name}</h3>
                                <p>{cval.price}</p>
                            </article>
                            <div>
                                <button onClick={()=>handleIncrement(cval.id)}>+</button>
                                <p className='quantity'>{cval.quantity}</p>
                                <button onClick={()=>handleDecrement(cval.id)}>-</button>
                            </div>
                        </div>
    
                    )
    
                })
    
            ): <h1>no item</h1>
    }
    </>
    
  )
}

export default CartItem
