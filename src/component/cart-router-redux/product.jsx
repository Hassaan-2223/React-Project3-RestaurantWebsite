import React  from 'react'
import "./style/style.scss"
// import Products from '../menuapi'
import  toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const Product = ({cardItem,toast}) => {

    const dispatch = useDispatch();
    
    const cardHandler = (curitem)=>{
        const selectedproduct={
            id:curitem.id,
            name:curitem.name,
            price:curitem.price,
            image:curitem.image,
        }
        dispatch({type:"addToCart",payload:{...curitem,quantity:1}})
        dispatch({type:"calculateprice"});
        // console.log(selectedproduct)
        toast.success("added to cart");
    }
    

  return (
    <>
        <div className="product-card-container">
            {
                cardItem.map((curVal)=>{
                    const {image,name,price,handler,id} = curVal
                    return(
                        <div className="product-card">
                            <div className="img-container">
                                <img src={image} alt="" />  
                            </div>
                            <div className="card-details">
                                <p>{name}</p>
                                <h4>${price}</h4>
                                <button onClick={()=>{cardHandler(curVal)}}>Add Item to Cart</button>
                            </div>
                        </div>
                    )
                })
            }


        </div>
      
    </>
  )
}

export default Product;
